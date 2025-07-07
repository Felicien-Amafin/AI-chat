import MainPart from "../layout/mainPart/MainPart";
import PageContainer from "../layout/pageContainer/PageContainer";
import { genericLinks } from "../userConstant";
import NewTchatForm from "../components/formUi/newTchatForm/NewTchatForm";
import NavBar from "../layout/navBar/NavBar";
import NavBarLinkList from "../components/navBarUi/navBarLinkList/NavBarLinkList";
import QuestionLiveSearch from "../components/navBarUi/navBarLiveSearch/QuestionLiveSearch";

const NewTchatPage = () => {
  return (
    <PageContainer>
      <NavBar>
        <>
          <NavBarLinkList links={genericLinks}/>
          <QuestionLiveSearch/>
        </>
      </NavBar>
      <MainPart>
        <NewTchatForm/>
      </MainPart>
    </PageContainer>
  )
}

export default NewTchatPage;