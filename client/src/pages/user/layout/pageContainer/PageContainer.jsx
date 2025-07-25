import useVerifyAccesTk from '../../hooks/useVerifyAccesTk';
import Loader from '../../../../components/others/Loader';
import style from './pageContainer.module.css';
import usePersistLogin from '../../../../hooks/usePersistLogin';
import useLogout from '../../hooks/useLogout';

const PageContainer = ({children}) => {
  const { isExpired } = useVerifyAccesTk();
  const { isAuthPending, isUnAuthorized } = usePersistLogin(isExpired);
  useLogout(isUnAuthorized);
  
  return (
    <div className={`${style.pageContainer} bckGroundImg`}>
      {(isExpired && isAuthPending) && 
        <div className={`${style.loader} flexColumn-allCentered`}>
          <Loader size={60} color='white'/>
        </div>
      }
      {!isExpired && <>{children}</>}
    </div>
  )
}

export default PageContainer;