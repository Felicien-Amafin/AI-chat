import Header from '../../../../layout/header/Header';
import style from './mainPart.module.css';

const MainPart = ({children}) => {
  return (
    <div className={style.mainPart}>
      <Header><button className={style.deconnexion}>Déconnection</button></Header>
      <main className={`${style.main} greyScroll`}>{children}</main>
    </div>
  )
}

export default MainPart;