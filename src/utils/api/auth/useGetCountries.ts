// import { UseQueryResult, useQuery } from "@tanstack/react-query";
// import { Methods } from "../../constant";
// import { EndPoints } from "../EndPoints";
// import { LongStaleTime } from "../../constant";
// import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
// import axiosInstance from "../axios";
// import { IGetaddDocData} from "../../../Types/api";

// export const GetCountries = async (
//   pageNumber: number
// ): Promise<IGetaddDocData> => {
//   try {
//     const response = await axiosInstance<IGetaddDocData>({
//       method: Methods.GET,
//       url: EndPoints.Countries.replace("1", String(pageNumber)),
//     });
//     handleApiResponseErrors(response, "validation_error");
//     return response.data;
//   } catch (error) {
//     console.error("API Error:", error);
//     throw error;
//   }
// };
// export const useGetCountriesQuery = (options = {}) => {
//   return useQuery({
//     queryKey: ["Countries"],
//     queryFn: GetCountries,
//     staleTime: LongStaleTime,
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//     refetchInterval: false,
//     ...options,
//   });
// };

// export const useGetCountries = (options = {}) => {
//   const {
//     data,
//     error,
//     isError,
//     isLoading,
//     isSuccess,
//     refetch,
//   }: UseQueryResult<IGetaddDocData> = useGetCountriesQuery(options);

//   return { data, error, isError, isLoading, isSuccess, refetch };
// };
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Methods } from "../../constant";
import { EndPoints } from "../EndPoints";
import { LongStaleTime } from "../../constant";
import { handleApiResponseErrors } from "../HandleAPIResponseErrors";
import axiosInstance from "../axios";
import { IGetCountries } from "../../../Types/api";
import { QueryKey } from "react-query";

export const GetCountries = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}): Promise<IGetCountries> => {
  const pageNumber = queryKey[1]; // Extract the page number from the queryKey
  try {
    const response = await axiosInstance<IGetCountries>({
      method: Methods.GET,
      url: EndPoints.Countries.replace("1", String(pageNumber)),
    });
    handleApiResponseErrors(response, "validation_error");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const useGetCountriesQuery = (pageNumber: number, options = {}) => {
  return useQuery({
    queryKey: ["Countries", pageNumber],
    queryFn: GetCountries,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    ...options,
  });
};

export const useGetCountries = (pageNumber: number, options = {}) => {
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    refetch,
  }: UseQueryResult<IGetCountries> = useGetCountriesQuery(pageNumber, options);
  return { data, error, isError, isLoading, isSuccess, refetch };
};
