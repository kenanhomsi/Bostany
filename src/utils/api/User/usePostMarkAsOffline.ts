import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Methods } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { MessageRespone } from "../../../Types/api";
import { EndPoints } from "../EndPoints";

export const MarkAsOffline = async (): Promise<MessageRespone> => {
  try {
    const response = await axiosInstance<MessageRespone, MessageRespone>({
      method: Methods.POST,
      url: EndPoints.MarkAsOffline,
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const useMarkAsOffline = (options = {}) => {
  const queryClient = useQueryClient();

  const mutation: UseMutationResult<MessageRespone, Error> = useMutation({
    mutationFn: MarkAsOffline,
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
