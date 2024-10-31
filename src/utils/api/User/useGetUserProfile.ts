import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetProfile } from "../../../Types/api";

export const GetUserProfile = async (): Promise<IGetProfile> => {
  try {
    const response = await axiosInstance<IGetProfile>({
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
export const useGetUserProfileQuery = (options = {}) => {
  return useQuery({
    queryKey: ["User"],
    queryFn: GetUserProfile,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetUserProfile = (options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetProfile> = useGetUserProfileQuery(options);

  return { data, error, isError, isLoading, isSuccess, refetch };
};
