import TchatContainer from "../components/tchatUi/tchatContainer/TchatContainer";
import NavBar from "../layout/navBar/NavBar";
import NavBarLinkList from "../components/navBarUi/navBarLinkList/NavBarLinkList";
import MainPart from "../layout/mainPart/MainPart";
import { allSideBarLinks } from "../constant/SideBarLinks";
import PageContainer from "../layout/pageContainer/PageContainer";
import QuestionLiveSearch from "../components/navBarUi/navBarLiveSearch/QuestionLiveSearch";

const NewTchatPage = () => {
    
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