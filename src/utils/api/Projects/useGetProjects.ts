import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetProjects } from "../../../Types/api";
import { QueryKey } from "react-query";
export const GetProjects = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}): Promise<IGetProjects> => {
  const type = queryKey[1];
  console.log(type);
  try {
    const response = await axiosInstance<IGetProjects>({
      method: Methods.GET,
      url: EndPoints.Projects.replace("all", String(type)),
    });
    handleApiResponseErrors(response, "validation_error");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
export const useGetProjectsQuery = (options = {}) => {
  return useQuery({
    queryKey: ["Projects"],
    queryFn: GetProjects,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetProjects = (options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetProjects> = useGetProjectsQuery(options);

  return { data, error, isError, isLoading, isSuccess, refetch };
};
