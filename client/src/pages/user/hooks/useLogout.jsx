import { useEffect } from 'react';
import { logoutUser } from '../../../store/authSlice';
import { useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useFetchLogout } from '../../../services/mutations';

const useLogout = (isUnAuthorized) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { data, mutate } = useFetchLogout();

  if(isUnAuthorized) mutate();

  useEffect(() => {
    if(data) {
      dispatch(logoutUser());
      queryClient.removeQueries();
    }

  },[dispatch, data, queryClient]);

  return { mutate };
}

export default useLogout;