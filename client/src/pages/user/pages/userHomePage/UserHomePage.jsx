import PageContainer from "../../layout/pageContainer/PageContainer";
import WidgetTchatSuggestion from "../../components/widgetUi/WidgetTchatSuggestion/WidgetTchatSuggestion";
import NavBar from "../../layout/navBar/NavBar";
import MainPart from "../../layout/mainPart/MainPart";
import Widget from "../../components/widgetUi/widget/Widget";
import NavBarLinkList from "../../components/navBarUi/navBarLinkList/NavBarLinkList";
import CategorieLiveSearch from "../../components/navBarUi/navBarLiveSearch/CategorieLiveSearch";
import { useSelector } from "react-redux";
import { capitalizedFirstChar } from "../../../../utils";
import { Link } from "react-router-dom";
import { tchatSuggestions } from "../../constant/homeWidgets";
import { homeSideBarLinks } from "../../constant/SideBarLinks";
import style from "./userHomePage.module.css";

const UserHomePage = () => {
  const { user } = useSelector((state) => state.auth);
  const userName = user ? capitalizedFirstChar(user.username) : '';

  return (
    <PageContainer> {/* PageContainer checks accessTk expiration */}
      <NavBar>
        <>
          <NavBarLinkList links={homeSideBarLinks}/>
          <CategorieLiveSearch/>
        </>
      </NavBar>
      <MainPart>
        <div className={`${style.container} containerAnim`}>
          <div className={`${style.intro} gradientScroll flex-column`}>
            <h1>Bonjour {userName}, commençons une nouvelle discussion ensemble !</h1>
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
                <Link to='/user/tchat-form' className={`${style.link} gradient button`}>Nouvelle discussion</Link>
              </div>
            </div>
          </div>
        </div>
      </MainPart>
    </PageContainer>
  )
}

export default UserHomePage;