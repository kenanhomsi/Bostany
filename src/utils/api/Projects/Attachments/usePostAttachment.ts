import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { Methods } from "../../../constant";
import { handleApiResponseErrors } from "../../HandleAPIResponseErrors";
import axiosInstance from "../../axios";
import {
  CreateAttachmentInput,
  CreateAttachmentOutPut,
} from "../../../../Types/api";
import { EndPoints } from "../../EndPoints";

export const CreateAttachment = async (
  payload: CreateAttachmentInput
): Promise<CreateAttachmentOutPut> => {
  try {
    const response = await axiosInstance<
      CreateAttachmentInput,
      CreateAttachmentOutPut
    >({
      method: Methods.POST,
      url: EndPoints.CreateAttachment.replace(":id", String(payload.ProjectId)),
      data: payload.file,
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const useCreateAttachment = (options = {}) => {
  const mutation: UseMutationResult<
    CreateAttachmentOutPut,
    Error,
    { payload: CreateAttachmentInput }
  > = useMutation({
    mutationFn: ({ payload }) => CreateAttachment(payload),
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
