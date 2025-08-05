import { useEffect } from 'react';
import { logoutUser } from '../../../store/authSlice';
import { useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useLogout } from '../../../services/mutations';

const useLogoutUser = (isAccessRefused) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { data, mutate } = useLogout();
  
  useEffect(() => {
    //Logout user if isAccessRefused is true
    if(isAccessRefused) mutate()
  }, [isAccessRefused, mutate])

  useEffect(() => {
    if(data) {
      //Remove user cred in auth store and clear the cache (if data is true)
      dispatch(logoutUser());
      queryClient.removeQueries();
    }
  },[dispatch, data, queryClient]);

  return { mutate };
}

export default useLogoutUser;