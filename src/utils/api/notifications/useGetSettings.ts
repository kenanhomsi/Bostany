import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetNotificationSettings } from "../../../Types/api";

export const GetNotificationSettings =
  async (): Promise<IGetNotificationSettings> => {
    try {
      const response = await axiosInstance<IGetNotificationSettings>({
        method: Methods.GET,
        url: EndPoints.notificationSettings,
      });
      handleApiResponseErrors(response, "validation_error");
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };
export const useGetNotificationSettingsQuery = (options = {}) => {
  return useQuery({
    queryKey: ["notificationSettings"],
    queryFn: GetNotificationSettings,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetNotificationSettings = (options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetNotificationSettings> =
    useGetNotificationSettingsQuery(options);

  return { data, error, isError, isLoading, isSuccess, refetch };
};
