import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import {
  UpdateNotificationSettingsInpust,
  UpdateNotificationSettingsOutput,
} from "../../../Types/api";

export const UpdateNotificationSettings = async (
  payload: UpdateNotificationSettingsInpust
): Promise<UpdateNotificationSettingsOutput> => {
  try {
    const response = await axiosInstance<
      UpdateNotificationSettingsInpust,
      UpdateNotificationSettingsOutput
    >({
      method: Methods.PUT,
      url: EndPoints.notificationSettings,
      data: payload,
    });
    handleApiResponseErrors(response, "validation_error");
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const useUpdateNotificationSettings = (options = {}) => {
  const queryClient = useQueryClient();
  const mutation: UseMutationResult<
    UpdateNotificationSettingsOutput,
    Error,
    { payload: UpdateNotificationSettingsInpust }
  > = useMutation({
    mutationFn: ({ payload }) => UpdateNotificationSettings(payload),
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notificationSettings"],
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
