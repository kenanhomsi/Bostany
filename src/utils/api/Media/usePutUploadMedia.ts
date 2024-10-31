import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { UploadMediaInpust, UploadMediaOutput } from "../../../Types/api";

export const UploadMedia = async (
  payload: UploadMediaInpust
): Promise<UploadMediaOutput> => {
  try {
    const response = await axiosInstance<UploadMediaInpust, UploadMediaOutput>({
      method: Methods.POST,
      url: EndPoints.UploadMedia,
      data: payload,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const useUploadMedia = (options = {}) => {
  const mutation: UseMutationResult<
    UploadMediaOutput,
    Error,
    { payload: UploadMediaInpust }
  > = useMutation({
    mutationFn: ({ payload }) => UploadMedia(payload),
    ...options,
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
