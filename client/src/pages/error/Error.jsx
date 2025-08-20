import { Link } from "react-router-dom";
import PageContainer from "../user/layout/pageContainer/PageContainer"
import style from "./error.module.css";

const ErrorPage = () => {
  return (
    <PageContainer>
      <section className={`${style.error} flexColumn-allCentered`}>
        <div className={`${style.alert} flexColumn-allCentered`}>
          <p>Erreur 404 page. Page introuvable.</p>
          <Link 
            to="/"
            className={`${style.link} button whiteBtn`}
          >
            Retour au site
          </Link>
        </div>
      </section>
    </PageContainer>
  )
}

export default ErrorPage;