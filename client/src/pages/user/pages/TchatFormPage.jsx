import MainPart from "../layout/mainPart/MainPart";
import PageContainer from "../layout/pageContainer/PageContainer";
import NavBar from "../layout/navBar/NavBar";
import NavBarLinkList from "../components/navBarUi/navBarLinkList/NavBarLinkList";
import FormContainer from "../components/formUi/formContainer/FormContainer";
import FormLoader from "../components/formUi/formLoader/FormLoader";
import { tchatFormSideBarLinks } from "../constant/SideBarLinks";
import useGetAuthorization from "../hooks/useGetAuthorization";
import { useState } from "react";
import FormErrorMess from "../components/formUi/formErrorMess/FormErrorMess";

const TchatFormPage = () => {
  const [isActive, setIsActive] = useState(true);
  const { //Get authorization to acces the tchat form
    isAuthPending, 
    isAccessTkPending, 
    isAuthorized, 
    isUnAuthorized, 
    isServerError, 
    serverErrorMess
  } = useGetAuthorization(isActive, setIsActive);

  return (
    <PageContainer>
      <NavBar>
        <NavBarLinkList links={tchatFormSideBarLinks}/>
      </NavBar>
      <MainPart>
        <>
          {(isAuthPending && !isAuthorized) && <FormLoader/>}
          {(isAccessTkPending && isUnAuthorized) && <FormLoader/>}
          {isAuthorized && <FormContainer/>} 
          {isServerError && <FormErrorMess error={serverErrorMess}/>}
        </>
      </MainPart>
    </PageContainer>
  )
}

export default TchatFormPage;