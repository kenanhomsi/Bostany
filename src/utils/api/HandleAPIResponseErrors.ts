export const handleApiResponseErrors = (
  response: any,
  errorKey: string
): void => {
  if (!response || response.status >= 400) {
    const errorMessage = response?.data?.message || "An unknown error occurred";

    // Check for validation errors
    if (response?.data?.errors?.[errorKey]) {
      const validationError = response.data.errors[errorKey];
      throw new Error(`Validation Error: ${validationError}`);
    }

    // Handle other errors
    throw new Error(errorMessage);
  }
};
