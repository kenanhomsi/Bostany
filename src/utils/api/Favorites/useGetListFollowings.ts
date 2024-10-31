import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetFollowingList } from "../../../Types/api";

export const GetFollowingList = async (): Promise<IGetFollowingList> => {
  try {
    const response = await axiosInstance<IGetFollowingList>({
      method: Methods.GET,
      url: EndPoints.FollowingList,
    });
    handleApiResponseErrors(response, "validation_error");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const useGetFollowingListQuery = (options = {}) => {
  return useQuery({
    queryKey: ["FollowingList"],
    queryFn: GetFollowingList,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetFollowingList = (options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetFollowingList> = useGetFollowingListQuery(options);

  return { data, error, isError, isLoading, isSuccess, refetch };
};
