import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetBaserProfile } from "../../../Types/api";

export const GetUserBaserProfile = async (): Promise<IGetBaserProfile> => {
  try {
    const response = await axiosInstance<IGetBaserProfile>({
      method: Methods.GET,
      url: EndPoints.Profile,
    });
    handleApiResponseErrors(response, "validation_error");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const useGetUserBaserProfileQuery = (options = {}) => {
  return useQuery({
    queryKey: ["UserBaser"],
    queryFn: GetUserBaserProfile,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetUserBaserProfile = (options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetBaserProfile> = useGetUserBaserProfileQuery(options);

  return { data, error, isError, isLoading, isSuccess, refetch };
};
