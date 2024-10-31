import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { LoginTypeInput, LoginTypeOutput } from "../../../Types/api";
import { EndPoints } from "../EndPoints";

export const Login = async (
  payload: LoginTypeInput
): Promise<LoginTypeOutput> => {
  try {
    const response = await axiosInstance<LoginTypeInput, LoginTypeOutput>({
      method: Methods.POST,
      url: EndPoints.login,
      data: payload,
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const usePostLogin = (options = {}) => {
  const mutation: UseMutationResult<
    LoginTypeOutput,
    Error,
    { payload: LoginTypeInput }
  > = useMutation({
    mutationFn: ({ payload }) => Login(payload),
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