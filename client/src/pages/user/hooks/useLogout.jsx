import { useEffect } from 'react';
import { logoutUser } from '../../../store/authSlice';
import { useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useFetchLogout } from '../../../services/mutations';

const useLogout = (isAccessRefused) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { data, mutate } = useFetchLogout();

  if(isAccessRefused) mutate();

  useEffect(() => {
    if(data) {
      dispatch(logoutUser());
      queryClient.removeQueries();
    }

  },[dispatch, data, queryClient]);

  return { mutate };
}

export default useLogout;