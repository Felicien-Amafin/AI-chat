import MainPart from "../layout/mainPart/MainPart";
import PageContainer from "../layout/pageContainer/PageContainer";
import { genericLinks, newTchatLinks } from "../userConstant";
import NewTchatForm from "../components/formUi/newTchatForm/NewTchatForm";
import NavBar from "../layout/navBar/NavBar";
import NavBarLinkList from "../components/navBarUi/navBarLinkList/NavBarLinkList";
import QuestionLiveSearch from "../components/navBarUi/navBarLiveSearch/QuestionLiveSearch";
import TchatContainer from "../components/tchatUi/tchatContainer/TchatContainer";

const NewTchatPage = () => {
  const data = false;

  return (
    <PageContainer>
      <NavBar>
        <>
          {data && <NavBarLinkList links={genericLinks}/>}
          {!data && <NavBarLinkList links={newTchatLinks}/>}
          {data && <QuestionLiveSearch/>}
        </>
      </NavBar>
      <MainPart>
        {!data && <NewTchatForm/>}
        {data && <TchatContainer/>}
      </MainPart>
    </PageContainer>
  )
}

export default NewTchatPage;