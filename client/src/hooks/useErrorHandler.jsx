
const useErrorHandler = (error) => {
    const isUnAuthorized = error?.status === 403 || error?.status === 401;
    const isServerError = error?.status === 500;
    const isClientError = error?.status === 400;

    return { isClientError, isUnAuthorized, isServerError };
}

export default useErrorHandler;