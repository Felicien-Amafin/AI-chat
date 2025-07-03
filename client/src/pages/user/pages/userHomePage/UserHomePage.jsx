import PageContainer from "../../layout/pageContainer/PageContainer";
import TchatSuggestion from "../../components/tchatSuggestion/TchatSuggestion";
import SideBar from "../../layout/sidebar/SideBar";
import MainPart from "../../layout/mainPart/MainPart";
import Widget from "../../components/widget/Widget";
import { Link } from "react-router-dom";
import { tchatSuggestions } from "../../userConstant";
import style from "./userHomePage.module.css";
import CategoriesList from "../../components/sideBarList/categorieList/CategoriesList";

const UserHomePage = () => {
  const username = 'Félicien';
  
  return (
    <PageContainer>
      <SideBar><CategoriesList/></SideBar>
      <MainPart>
        <div className={style.container}>
          <div className={`${style.intro} content flex-column`}>
            <h1>Bonjour {username}, commençons une nouvelle discussion ensemble !</h1>
            <div className={style.suggestions}>
              <h2>Voici quelques suggestions:</h2>
              <div className={style.widgetRow}>
                {tchatSuggestions.map((suggestion)=> <Widget key={suggestion.title}>
                  <TchatSuggestion suggestion={suggestion}/>
                </Widget>)}
              </div>
            </div>
            <div className={style.newTchat}>
              <h2>Vous avez déjà une idée ?</h2>
              <div className={style.btnPlusP}>
                <p>Commencer un nouveau tchat en lançant une nouvelle discussion.</p>
                <Link to='' className={`${style.link} gradient button`}>Nouvelle discussion</Link>
              </div>
            </div>
          </div>
        </div>
      </MainPart>
    </PageContainer>
  )
}

export default UserHomePage;