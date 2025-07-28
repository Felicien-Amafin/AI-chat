import { useSelector } from 'react-redux';
import { useFetchNewAccessToken } from '../../../services/queries';
import useErrorHandler from '../../../hooks/useErrorHandler';

const useRefreshAccessTk = (isActive) => {
    const { accessTkKey } = useSelector((state) => state.auth);
    console.log('useRefresh ...')
    const { 
        isFetching:isFetchingAccessTk,
        data, 
        error:accessTkError
    } = useFetchNewAccessToken(isActive, accessTkKey);

    console.log(data)
    /* const { isUnAuthorized:isAccessTkUnAuthorized, isServerError:isAccesTkServerError } = useErrorHandler(accessTkError); */

    return { /* isFetchingAccessTk */ /* isAccessTkUnAuthorized, isAccesTkServerError, */ /* accessTkData, accessTkKey */ };
}

export default useRefreshAccessTk;