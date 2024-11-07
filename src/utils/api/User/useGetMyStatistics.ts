import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetStatistics } from "../../../Types/api";

export const GetMyStatistics = async (): Promise<IGetStatistics> => {
  try {
    const response = await axiosInstance<IGetStatistics>({
      method: Methods.GET,
      url: EndPoints.Statistics,
    });
    handleApiResponseErrors(response, "validation_error");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const useGetMyStatisticsQuery = (options = {}) => {
  return useQuery({
    queryKey: ["MyStatistics"],
    queryFn: GetMyStatistics,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetMyStatistics = (options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetStatistics> = useGetMyStatisticsQuery(options);

  return { data, error, isError, isLoading, isSuccess, refetch };
};
