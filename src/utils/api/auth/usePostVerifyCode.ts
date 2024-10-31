import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { VerifyCodeInput, VerifyCodeOutput } from "../../../Types/api";
import { EndPoints } from "../EndPoints";

export const VeifyCode = async (
  payload: VerifyCodeInput
): Promise<VerifyCodeOutput> => {
  try {
    const response = await axiosInstance<VerifyCodeInput, VerifyCodeOutput>({
      method: Methods.POST,
      url: EndPoints.VerifyCode,
      data: payload,
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const usePostVeifyCode = (options = {}) => {
  const mutation: UseMutationResult<
    VerifyCodeOutput,
    Error,
    { payload: VerifyCodeInput }
  > = useMutation({
    mutationFn: ({ payload }) => VeifyCode(payload),
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
