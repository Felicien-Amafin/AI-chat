import Header from '../../../../layout/header/Header';
import useLogoutUser from '../../hooks/useLogoutUser';
import style from './mainPart.module.css';

const MainPart = ({children}) => {
  const { mutate } = useLogoutUser();
  
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