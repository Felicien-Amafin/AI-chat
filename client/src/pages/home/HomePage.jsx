import Landing from "../../layout/landing/Landing";
import style from './homePage.module.css';

const HomePage = () => {
  return (
    <Landing>
      <div className={style.imgBox}>
        <figure className={`${style.img} bckGroundImg`}>
          <div className={style.dialog}>
            <figure className={`${style.userImg} bckGroundImg`}></figure>
            <p>Bonjour Ai Chat. Qu'est-ce qu'une aurore boréale? </p>
          </div>
        </figure>
      </div>
    </Landing>
  )
}

export default HomePage;