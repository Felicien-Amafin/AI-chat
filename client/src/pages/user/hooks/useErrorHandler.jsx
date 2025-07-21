
const useErrorHandler = (error) => {
    const isUnAuthorized = error?.status === 403 || error?.status === 401;
    const isServerError = error?.status === 500;

    return { isUnAuthorized, isServerError };
}

export default useErrorHandler;