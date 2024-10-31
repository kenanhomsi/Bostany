import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetSpecialities } from "../../../Types/api";
import { QueryKey } from "react-query";

export const GetSpecialitiestList = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}): Promise<IGetSpecialities> => {
  const pageNumber = queryKey[1];
  try {
    const response = await axiosInstance<IGetSpecialities>({
      method: Methods.GET,
      url: EndPoints.Specialities.replace("1", String(pageNumber)),
    });
    handleApiResponseErrors(response, "validation_error");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const useGetSpecialitiestListQuery = (options = {}) => {
  return useQuery({
    queryKey: ["Specialities"],
    queryFn: GetSpecialitiestList,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetSpecialitiestList = (options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetSpecialities> = useGetSpecialitiestListQuery(options);

  return { data, error, isError, isLoading, isSuccess, refetch };
};
