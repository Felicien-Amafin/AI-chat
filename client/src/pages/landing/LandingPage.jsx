import LinkTo from '../../components/linkTo/LinkTo';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import style from './landingPage.module.css';

const LandingPage = ({children}) => {
  return (
    <div className={`${style.landingPage} bckGroundImg`}>
      <Header/>
      <main className={`${style.pageContainer} flex-row`}>
        <section className={`${style.part1} flex-column`}>
          <h1>Ai tchat</h1>
          <h2>Trouvez l'inspiration et gagnez en productivité</h2>
          <p>Ai tchat est votre assistant personnel. Démarrez une discussion et apprenez de nouvelles choses.</p>
          <LinkTo path='/auth/sign-in' className={`${style.link} button`}>Commencer</LinkTo>
        </section>
        <section className={style.part2}>
          {children}
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default LandingPage;