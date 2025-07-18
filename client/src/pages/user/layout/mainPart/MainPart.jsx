import { useDispatch } from 'react-redux';
import Header from '../../../../layout/header/Header';
import style from './mainPart.module.css';
import { useLogout } from '../../../../services/mutations';
import { useEffect } from 'react';
import { logoutUser } from '../../../../store/authSlice';

const MainPart = ({children}) => {
  const dispatch = useDispatch();
  const { data, mutate } = useLogout();

  useEffect(() => {
    if(data) dispatch(logoutUser());

  },[dispatch, data])

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