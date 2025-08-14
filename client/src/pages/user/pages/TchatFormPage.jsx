import MainPart from "../layout/mainPart/MainPart";
import PageContainer from "../layout/pageContainer/PageContainer";
import NavBar from "../layout/navBar/NavBar";
import NavBarLinkList from "../components/navBarUi/navBarLinkList/NavBarLinkList";
import FormContainer from "../components/formUi/formContainer/FormContainer";
import { tchatFormSideBarLinks } from "../constant/SideBarLinks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetTchat } from "../../../store/tchatSlice";
import { useQueryClient } from "@tanstack/react-query";

const TchatFormPage = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    dispatch(resetTchat()); //Reset tchat state to initial state before starting a new tchat
    queryClient.removeQueries({ queryKey: ['tchat'] }); // Clear tchat's questions list from cache before starting new tchat

  },[dispatch, queryClient]);

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