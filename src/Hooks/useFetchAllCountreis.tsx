import { useState, useEffect } from "react";
import { CountriesData } from "../Types/api";
import { useGetCountries } from "../utils/api/auth/useGetCountries";

const useFetchCountries = () => {
    const [allCountries, setallCountries] = useState<CountriesData[]>([]);
    const [page, setPage] = useState(1);
    const { data, isLoading, isError } = useGetCountries(page);

    useEffect(() => {
        if (data && !isLoading && !isError) {
            setallCountries((prevElements) => [...prevElements, ...data.data]);
            if (allCountries.length >= data.meta.total) {
                return;
            }
            setPage((prevPage) => prevPage + 1);
        }
    }, [data, isLoading, isError]);

    return { allCountries, isLoading, isError };
};

export default useFetchCountries;