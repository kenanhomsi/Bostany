import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Methods } from "../../../constant";
import { handleApiResponseErrors } from "../../HandleAPIResponseErrors";
import axiosInstance from "../../axios";
// import { any } from "../../../../Types/api";
import { EndPoints } from "../../EndPoints";

export const AcceptProject = async (pojectId: number): Promise<any> => {
  try {
    const response = await axiosInstance<any>({
      method: Methods.POST,
      url: EndPoints.AcceptProject.replace(":id", String(pojectId)),
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const useAcceptProject = (options = {}) => {
  const queryClient = useQueryClient();

  const mutation: UseMutationResult<any, Error, { id: number }> = useMutation({
    mutationFn: ({ id }) => AcceptProject(id),
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
