import { useGetCountries } from "./api/auth/useGetCountries";

export const usefetchAllElements = async ({
  total,
  currentElements,
  apiRequest,
}) => {
  let allElements = currentElements;
  let page = 1;
  while (true) {
    const { data } = useGetCountries(page);
    allElements = [...allElements, ...data.elements];
    if (data.elements.length == total) {
      break;
    }
    page++;
  }

  return allElements;
};
