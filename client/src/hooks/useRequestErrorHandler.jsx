
const useRequestErrorHandler = (error) => {
    const isUnAuthorized = error?.status === 401;
    const isForbidden = error?.status === 403;
    const isServerError = error?.status === 500;
    const isClientError = error?.status === 400;

    return { isUnAuthorized, isForbidden, isServerError, isClientError };
}

export default useRequestErrorHandler;