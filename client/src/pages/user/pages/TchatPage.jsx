import { useParams } from "react-router-dom";
import PageContainer from "../layout/pageContainer/PageContainer";
import NavBar from "../layout/navBar/NavBar";
import MainPart from "../layout/mainPart/MainPart";
import TchatContainer from "../components/tchatUi/tchatContainer/TchatContainer";
import NavBarLinkList from "../components/navBarUi/navBarLinkList/NavBarLinkList";
import QuestionLiveSearch from "../components/navBarUi/navBarLiveSearch/QuestionLiveSearch";
import { allSideBarLinks } from "../constant/SideBarLinks";

const TchatPage = () => {
    const { tchatId } = useParams();

    return (
        <PageContainer>
            <NavBar>
                <NavBarLinkList links={allSideBarLinks}/>
                <QuestionLiveSearch tchatId={tchatId}/>
            </NavBar>
            <MainPart>
                <TchatContainer tchatId={tchatId}/>
            </MainPart>
        </PageContainer>
    )
}

export default TchatPage;