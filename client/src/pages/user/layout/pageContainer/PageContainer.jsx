import { useEffect } from 'react';
import Loader from '../../../../components/others/Loader';
import { useNavAuthorization } from '../../../../services/queries';
import useErrorHandler from '../../hooks/useErrorHandler';
import { useQueryClient } from '@tanstack/react-query';
import useLogout from '../../hooks/useLogout';
import style from './pageContainer.module.css';
import { useSelector } from 'react-redux';

const PageContainer = ({children}) => {
  const queryKey = 'navAuth';
  const { isPending, data, error } = useNavAuthorization(queryKey);
  /* const { isUnAuthorized, isForbidden, isServerError } = useErrorHandler(error); */
  /* useLogout(isUnAuthorized || isForbidden); */

 /*  const queryClient = useQueryClient(); */

  const isAuthorized = data?.status === 200;

  console.log('Data: ', data);
  console.log('Error: ', error)

  /* useEffect(() => {
    if(data) queryClient.removeQueries({ queryKey, exact: true});

  },[data, queryClient]); */

  return (
    <div className={`${style.pageContainer} bckGroundImg`}>
      {children}
      {/* {isPending && 
        <div className={`${style.loader} flexColumn-allCentered`}>
          <Loader size={60} color='white'/>
        </div>
      }
      {isAuthorized && <>{children}</>}
      {isServerError && <p>server error</p>} */}
    </div> 
  )
}

export default PageContainer;