import Header from '../../../../layout/header/Header';
import useLogout from '../../hooks/useLogout';
import style from './mainPart.module.css';


const MainPart = ({children}) => {
  const { mutate } = useLogout();
  
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