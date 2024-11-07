import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { updateProfileSettingsInpust, IGetProfile } from "../../../Types/api";

export const UpdateProfileSettings = async (
  payload: updateProfileSettingsInpust
): Promise<IGetProfile> => {
  try {
    const response = await axiosInstance<
      updateProfileSettingsInpust,
      IGetProfile
    >({
      method: Methods.PATCH,
      url: EndPoints.UpdateProfileSettings,
      data: payload,
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const useUpdateProfileSettings = (options = {}) => {
  const queryClient = useQueryClient();
  const mutation: UseMutationResult<
    IGetProfile,
    Error,
    { payload: updateProfileSettingsInpust }
  > = useMutation({
    mutationFn: ({ payload }) => UpdateProfileSettings(payload),
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
