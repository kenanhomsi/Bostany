import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetCategories } from "../../../Types/api";
import { QueryKey } from "react-query";

export const GetCategoriestList = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}): Promise<IGetCategories> => {
  const SpecialId = queryKey[1];
  try {
    const response = await axiosInstance<IGetCategories>({
      method: Methods.GET,
      url: EndPoints.Categories.replace("1", String(SpecialId)),
    });
    handleApiResponseErrors(response, "validation_error");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const useGetCategoriestListQuery = (options = {}) => {
  return useQuery({
    queryKey: ["Categories"],
    queryFn: GetCategoriestList,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetCategoriestList = (options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetCategories> = useGetCategoriestListQuery(options);

  return { data, error, isError, isLoading, isSuccess, refetch };
};
