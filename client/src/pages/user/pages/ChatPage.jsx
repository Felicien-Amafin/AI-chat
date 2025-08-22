import { useParams } from "react-router-dom";
import PageContainer from "../layout/pageContainer/PageContainer";
import NavBar from "../layout/navBar/NavBar";
import MainPart from "../layout/mainPart/MainPart";
import ChatContainer from "../components/chatUi/chatContainer/ChatContainer";
import NavBarLinkList from "../components/navBarUi/navBarLinkList/NavBarLinkList";
import QuestionLiveSearch from "../components/navBarUi/navBarLiveSearch/QuestionLiveSearch";
import { allSideBarLinks } from "../constant/SideBarLinks";

const ChatPage = () => {
    const { chatId } = useParams();

    return (
        <PageContainer>
            <NavBar>
                <NavBarLinkList links={allSideBarLinks}/>
                <QuestionLiveSearch chatId={chatId}/>
            </NavBar>
            <MainPart>
                <ChatContainer chatId={chatId}/>
            </MainPart>
        </PageContainer>
    )
}

export default ChatPage;