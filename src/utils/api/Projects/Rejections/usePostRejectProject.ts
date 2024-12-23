import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Methods } from "../../../constant";
import { handleApiResponseErrors } from "../../HandleAPIResponseErrors";
import axiosInstance from "../../axios";
import { MessageRespone } from "../../../../Types/api";
import { EndPoints } from "../../EndPoints";

export const RejectProject = async (
  payload: MessageRespone,
  pojectId: number
): Promise<MessageRespone> => {
  try {
    const response = await axiosInstance<MessageRespone, MessageRespone>({
      method: Methods.POST,
      url: EndPoints.RejectProject.replace(":id", String(pojectId)),
      data: payload,
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const useRejectProject = (options = {}) => {
  const queryClient = useQueryClient();

  const mutation: UseMutationResult<
    MessageRespone,
    Error,
    { payload: MessageRespone; id: number }
  > = useMutation({
    mutationFn: ({ payload, id }) => RejectProject(payload, id),
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Projects"],
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
