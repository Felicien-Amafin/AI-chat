import LandingPage from "../landing/LandingPage";
import style from './homePage.module.css';

const HomePage = () => {
  return (
    <LandingPage>
      <div className={style.imgBox}>
        <figure className={`${style.img} bckGroundImg`}>
          <div className={style.dialog}>
            <figure className={`${style.userImg} bckGroundImg`}></figure>
            <p>Bonjour Ai tchat. Qu'est-ce une aurore boréale? </p>
          </div>
        </figure>
      </div>
    </LandingPage>
  )
}

export default HomePage;