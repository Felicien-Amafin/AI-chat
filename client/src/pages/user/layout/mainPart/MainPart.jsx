import { useDispatch } from 'react-redux';
import Header from '../../../../layout/header/Header';
import style from './mainPart.module.css';
import { useLogout } from '../../../../services/mutations';
import { useEffect } from 'react';
import { logoutUser } from '../../../../store/authSlice';
import { useQueryClient } from '@tanstack/react-query';

const MainPart = ({children}) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { data, mutate } = useLogout();

  useEffect(() => {
    if(data) {
      dispatch(logoutUser());
      queryClient.removeQueries();
    }

  },[dispatch, data, queryClient]);

  return (
    <div className={style.mainPart}>
      <Header>
        <button 
          className={style.deconnexion}
          onClick={() => mutate()}
          >
            Déconnection
          </button>
        </Header>
      <main className={`${style.main} greyScroll`}>{children}</main>
    </div>
  )
}

export default MainPart;