import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Methods } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { CreateProjectInput, IPostProjectOutPut } from "../../../Types/api";
import { EndPoints } from "../EndPoints";

export const CreateProject = async (
  payload: CreateProjectInput
): Promise<IPostProjectOutPut> => {
  try {
    const response = await axiosInstance<
      CreateProjectInput,
      IPostProjectOutPut
    >({
      method: Methods.POST,
      url: EndPoints.CreateProject,
      data: payload,
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const useCreateProject = (options = {}) => {
  const queryClient = useQueryClient();

  const mutation: UseMutationResult<
    IPostProjectOutPut,
    Error,
    { payload: CreateProjectInput }
  > = useMutation({
    mutationFn: ({ payload }) => CreateProject(payload),
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
