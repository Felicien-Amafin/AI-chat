import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import style from './landing.module.css';

const Landing = ({children}) => {
  return (
    <div className={`${style.landingPage} bckGroundImg`}>
      <Header>
        <Link to='/auth/sign-in' className={`${style.connexion} button`}>Connexion</Link>
      </Header>
      <main className={`${style.pageContainer} flex-row`}>
        <section className={`${style.part1} flex-column`}>
          <h1>Ai tchat</h1>
          <h2>Trouvez l'inspiration et gagnez en productivité</h2>
          <p>Ai Chat est votre assistant personnel. Démarrez une discussion et apprenez de nouvelles choses.</p>
          <Link to='/auth/sign-in' className={`${style.link} button gradient`}>Commencer</Link>
        </section>
        <section className={style.part2}>
          {children}
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Landing;