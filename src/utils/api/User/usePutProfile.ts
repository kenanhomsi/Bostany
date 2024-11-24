import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import {
  updateProfileInpust,
  updateProfileOutPut,
  ErrorType,
} from "../../../Types/api";

export const UpdateProfile = async (
  payload: updateProfileInpust
): Promise<updateProfileOutPut> => {
  try {
    const response = await axiosInstance<
      updateProfileInpust,
      updateProfileOutPut
    >({
      method: Methods.PUT,
      url: EndPoints.Profile,
      data: payload,
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const useUpdateProfile = (options = {}) => {
  const queryClient = useQueryClient();
  const mutation: UseMutationResult<
    updateProfileOutPut,
    ErrorType,
    { payload: updateProfileInpust }
  > = useMutation({
    mutationFn: ({ payload }) => UpdateProfile(payload),
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["User"],
      });
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
