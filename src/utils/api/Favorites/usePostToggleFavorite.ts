import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Methods } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { ToggleFavoriteOutput } from "../../../Types/api";
import { EndPoints } from "../EndPoints";

export const ToggleFavorite = async (
  payload: number
): Promise<ToggleFavoriteOutput> => {
  try {
    const response = await axiosInstance<
      ToggleFavoriteOutput,
      ToggleFavoriteOutput
    >({
      method: Methods.POST,
      url: EndPoints.ToggleFavorite.replace(":id", String(payload)),
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const usePostToggleFavorite = (options = {}) => {
  const queryClient = useQueryClient();
  const mutation: UseMutationResult<
    ToggleFavoriteOutput,
    Error,
    { payload: number }
  > = useMutation({
    mutationFn: ({ payload }) => ToggleFavorite(payload),
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["FollowingList"] });
    },
  });

  const isLoading = mutation.status === "pending";

  return {
    data: mutation.data,
    error: mutation.error,
    isError: mutation.isError,
    isLoading, // <-- Derived from status
    isSuccess: mutation.isSuccess,
    mutate: mutation.mutate,
    reset: mutation.reset,
    status: mutation.status,
  };
};
