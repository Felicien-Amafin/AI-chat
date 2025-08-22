import PageContainer from '../user/layout/pageContainer/PageContainer';
import style from './onlyUnderDesktopPage.module.css';

const OnlyUnderDesktop = () => { 
  return (
    <PageContainer>
        <section className={`${style.container} flexColumn-allCentered`}>
            <div className={`${style.overlay} containerAnim flex-column`}>
                <p>Ai Chat</p>
                <p>Cette application est optimisée pour les ordinateurs. Pour une meilleure expérience, veuillez la visiter sur un appareil avec une largeur d'écran d'au moins 992 pixels</p>
            </div>
        </section>
    </PageContainer>
  )
}

export default OnlyUnderDesktop;