import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetNotifications } from "../../../Types/api";

export const GetNotifications = async (): Promise<IGetNotifications> => {
  try {
    const response = await axiosInstance<IGetNotifications>({
      method: Methods.GET,
      url: EndPoints.notifications,
    });
    handleApiResponseErrors(response, "validation_error");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const useGetNotificationsQuery = (options = {}) => {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: GetNotifications,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetNotifications = (options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetNotifications> = useGetNotificationsQuery(options);

  return { data, error, isError, isLoading, isSuccess, refetch };
};
