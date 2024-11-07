import { QueryKey, UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetProfile } from "../../../Types/api";

export const GetShowUser = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}): Promise<IGetProfile> => {
  try {
    const userId = queryKey[1];
    const response = await axiosInstance<IGetProfile>({
      method: Methods.GET,
      url: EndPoints.ShowUser.replace(":id", String(userId)),
    });
    handleApiResponseErrors(response, "validation_error");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const useGetShowUserQuery = (options = {}) => {
  return useQuery({
    queryKey: ["ShowUser"],
    queryFn: GetShowUser,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetShowUser = (options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetProfile> = useGetShowUserQuery(options);

  return { data, error, isError, isLoading, isSuccess, refetch };
};
