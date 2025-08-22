import MainPart from "../layout/mainPart/MainPart";
import PageContainer from "../layout/pageContainer/PageContainer";
import NavBar from "../layout/navBar/NavBar";
import NavBarLinkList from "../components/navBarUi/navBarLinkList/NavBarLinkList";
import FormContainer from "../components/formUi/formContainer/FormContainer";
import { chatFormSideBarLinks } from "../constant/SideBarLinks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetChat } from "../../../store/chatSlice";
import { useQueryClient } from "@tanstack/react-query";

const ChatFormPage = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    //Reset chat state to initial state before starting a new chat
    dispatch(resetChat()); 
    
    // Clear chat's questions list from cache before starting new chat
    queryClient.removeQueries({ queryKey: ['chat-messages'] }); 

  },[dispatch, queryClient]);

  return (
    <PageContainer>
      <NavBar>
        <NavBarLinkList links={chatFormSideBarLinks}/>
      </NavBar>
      <MainPart>
        <FormContainer/>
      </MainPart>
    </PageContainer>
  )
}

export default ChatFormPage;