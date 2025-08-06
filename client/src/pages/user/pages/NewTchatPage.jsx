import TchatContainer from "../components/tchatUi/tchatContainer/TchatContainer";
import NavBar from "../layout/navBar/NavBar";
import NavBarLinkList from "../components/navBarUi/navBarLinkList/NavBarLinkList";
import MainPart from "../layout/mainPart/MainPart";
import { allSideBarLinks } from "../constant/SideBarLinks";
import PageContainer from "../layout/pageContainer/PageContainer";
import QuestionLiveSearch from "../components/navBarUi/navBarLiveSearch/QuestionLiveSearch";
import { useLocation } from "react-router-dom";
import useCreateTchatHandler from "../hooks/useCreateTchatHandler";

const NewTchatPage = () => {
    const location = useLocation();
    const dataToSend = location.state; //getting data from tchatFormPage.

    const { 
        isPending, 
        isTchatCreated, 
        createdTchat, 
        isServerError 
    } = useCreateTchatHandler(dataToSend);

    return (
        <PageContainer>
            <NavBar>
                <NavBarLinkList links={allSideBarLinks}/>
                {/* <QuestionLiveSearch/> */}
            </NavBar>
            <MainPart>
                <TchatContainer/>
            </MainPart>
        </PageContainer>
    )
}

export default NewTchatPage;