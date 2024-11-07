import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Methods } from "../../../constant";
import { handleApiResponseErrors } from "../../HandleAPIResponseErrors";
import axiosInstance from "../../axios";
import { RejectProjectType } from "../../../../Types/api";
import { EndPoints } from "../../EndPoints";

export const RejectProject = async (
  payload: RejectProjectType,
  pojectId: number
): Promise<RejectProjectType> => {
  try {
    const response = await axiosInstance<RejectProjectType, RejectProjectType>({
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
    RejectProjectType,
    Error,
    { payload: RejectProjectType; id: number }
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
