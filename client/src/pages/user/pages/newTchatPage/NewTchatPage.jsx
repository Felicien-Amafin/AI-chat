import TchatContainer from "../../components/tchatUi/tchatContainer/TchatContainer";
import Loader from "../../../../components/others/Loader";
import NavBar from "../../layout/navBar/NavBar";
import NavBarLinkList from "../../components/navBarUi/navBarLinkList/NavBarLinkList";
import QuestionLiveSearch from "../../components/navBarUi/navBarLiveSearch/QuestionLiveSearch";
import MainPart from "../../layout/mainPart/MainPart";
import { allSideBarLinks } from "../../constant/SideBarLinks";
import PageContainer from "../../layout/pageContainer/PageContainer";
import { useLocation } from "react-router-dom";
import useCreateTchatHandler from "../../hooks/useCreateTchatHandler";
import style from './newTchatPage.module.css';

const NewTchatPage = () => {
    const location = useLocation();
    const dataToSend = location.state; //getting data from tchatFormPage.

    const { 
        isPending, 
        isTchatCreated, 
        createdTchat, 
        isServerError, 
        serverError 
    } = useCreateTchatHandler(dataToSend);

    return (
        <PageContainer>
            <NavBar>
                <NavBarLinkList links={allSideBarLinks}/>
                {/* QuestionLiveSearch needs tchat's id to get all the tchat's history */}
                {isTchatCreated && <QuestionLiveSearch tchatId={createdTchat.id}/>}
            </NavBar>
            <MainPart>
                {isTchatCreated && <TchatContainer/>}
                {isPending && <div className={style.centeredElmt}><Loader size={50} color='white'/></div>}
                {isServerError && <p className={`${style.centeredElmt} error`}>{serverError}</p>}
            </MainPart>
        </PageContainer>
    )
}

export default NewTchatPage;