import MainPart from "../layout/mainPart/MainPart";
import PageContainer from "../layout/pageContainer/PageContainer";
import NavBar from "../layout/navBar/NavBar";
import NavBarLinkList from "../components/navBarUi/navBarLinkList/NavBarLinkList";
import FormContainer from "../components/formUi/formContainer/FormContainer";
import { tchatFormSideBarLinks } from "../constant/SideBarLinks";

const TchatFormPage = () => {
  return (
    <PageContainer>
      <NavBar>
        <NavBarLinkList links={tchatFormSideBarLinks}/>
      </NavBar>
      <MainPart>
        <FormContainer/>
      </MainPart>
    </PageContainer>
  )
}

export default TchatFormPage;