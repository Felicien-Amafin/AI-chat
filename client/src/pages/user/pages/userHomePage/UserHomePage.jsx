import PageContainer from "../../layout/pageContainer/PageContainer";
import WidgetTchatSuggestion from "../../components/widgetUi/WidgetTchatSuggestion/WidgetTchatSuggestion";
import NavBar from "../../layout/navBar/NavBar";
import MainPart from "../../layout/mainPart/MainPart";
import Widget from "../../components/widgetUi/widget/Widget";
import NavBarLinkList from "../../components/navBarUi/navBarLinkList/NavBarLinkList";
import CategorieLiveSearch from "../../components/navBarUi/navBarLiveSearch/CategorieLiveSearch";
import { Link } from "react-router-dom";
import { homeLinks, tchatSuggestions } from "../../userConstant";
import style from "./userHomePage.module.css";

const UserHomePage = () => {
  const username = 'Félicien';
  
  return (
    <PageContainer>
      <NavBar>
        <>
          <NavBarLinkList links={homeLinks}/>
          <CategorieLiveSearch/>
        </>
      </NavBar>
      <MainPart>
        <div className={`${style.container} containerAnim`}>
          <div className={`${style.intro} gradientScroll flex-column`}>
            <h1>Bonjour {username}, commençons une nouvelle discussion ensemble !</h1>
            <div className={style.suggestions}>
              <h2>Voici quelques suggestions:</h2>
              <div className={style.widgetRow}>
                {tchatSuggestions.map((suggestion)=> <Widget key={suggestion.title}>
                  <WidgetTchatSuggestion suggestion={suggestion}/>
                </Widget>)}
              </div>
            </div>
            <div className={style.newTchat}>
              <h2>Vous avez déjà une idée ?</h2>
              <div className={style.btnPlusP}>
                <p>Commencez à tchater en lançant une nouvelle discussion.</p>
                <Link to='/user/new-tchat' className={`${style.link} gradient button`}>Nouvelle discussion</Link>
              </div>
            </div>
          </div>
        </div>
      </MainPart>
    </PageContainer>
  )
}

export default UserHomePage;