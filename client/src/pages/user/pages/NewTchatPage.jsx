import PageContainer from "../layout/pageContainer/PageContainer";
import { useLocation } from 'react-router-dom';

const NewTchatPage = () => {
    const location = useLocation();

  // Accès aux données via `location.state`
    const data = location.state;

    console.log(data)
    return (
        <PageContainer>
        {/* <NavBar>
            <NavBarLinkList links={tchatFormSideBarLinks}/>
        </NavBar>
        <MainPart>
            <FormContainer/>
        </MainPart> */}
        </PageContainer>
    )
}

export default NewTchatPage;