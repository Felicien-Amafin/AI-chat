import Loader from '../../../../components/others/Loader';
import style from './pageContainer.module.css';

const PageContainer = ({children}) => {
  
  return (
    {/* <div className={`${style.pageContainer} bckGroundImg`}>
      {(isExpired && isAuthPending) && 
        <div className={`${style.loader} flexColumn-allCentered`}>
          <Loader size={60} color='white'/>
        </div>
      }
      {!isExpired && <>{children}</>}
    </div> */}
  )
}

export default PageContainer;