import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetConsultants } from "../../../Types/api";
import { QueryKey } from "react-query";

export const GetConsultantsList = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}): Promise<IGetConsultants> => {
  const SpecialId = queryKey[1];
  try {
    const response = await axiosInstance<IGetConsultants>({
      method: Methods.GET,
      url: EndPoints.Consultants.replace("filters", String(SpecialId)),
    });
    handleApiResponseErrors(response, "validation_error");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const useGetConsultantsListQuery = (options = {}) => {
  return useQuery({
    queryKey: ["Consultants"],
    queryFn: GetConsultantsList,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetConsultantsList = (options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetConsultants> = useGetConsultantsListQuery(options);

  return { data, error, isError, isLoading, isSuccess, refetch };
};
