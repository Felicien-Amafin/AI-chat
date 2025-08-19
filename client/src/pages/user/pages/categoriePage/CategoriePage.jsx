import PageContainer from '../../layout/pageContainer/PageContainer';
import NavBar from '../../layout/navBar/NavBar';
import MainPart from '../../layout/mainPart/MainPart';
import SearchField from '../../components/others/SearchField';
import NavBarLinkList from '../../components/navBarUi/navBarLinkList/NavBarLinkList';
import CategorieLiveSearch from '../../components/navBarUi/navBarLiveSearch/CategorieLiveSearch';
import Loader from '../../../../components/others/Loader';
import CategorieName from '../../components/others/categorieName/CategorieName';
import DeleteCategorie from '../../components/others/deleteCategorie/DeleteCategorie';
import TchatList from '../../components/tchatUi/tchatList/TchatList';
import ConfirmActionModal from '../../components/others/confirmActionModal/ConfirmActionModal';
import { allSideBarLinks } from '../../constant/SideBarLinks';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useConfirmActionModal from '../../hooks/useConfirmActionModal';
import useDeleteCategorieHandler from '../../hooks/useDeleteCategorieHandler';
import useGetSingleCategorieHandler from '../../hooks/useGetSingleCategorieHandler';
import { capitalizedFirstChar, tchatFilter } from '../../../../utils';
import style from './categoriePage.module.css';
import PageLoader from '../../../../components/others/pageLoader/PageLoader';
import TchatListContainer from '../../components/tchatUi/tchatListContainer/TchatListContainer';
import ErrorOnPage from '../../components/others/errorOnPage/ErrorOnPage';

const CategoriePage = () => {  
  const [searchValue, setSearchValue] = useState('');

  const { categorieName } = useParams();

  const { setIsModalOpened, isModalOpened } = useConfirmActionModal(categorieName);

  const { 
    isCategoriePending, 
    tchatList, 
    isCategorieServerError, 
    categorieServerError, 
    isCategorieNotFound, 
    categorieNotFoundMess
  } = useGetSingleCategorieHandler(categorieName);

  const filteredTchats = tchatFilter(tchatList, searchValue);

  const { 
    mutate, 
    isDeletionPending, 
    isDeletionServerError, 
    deletionServerErrorMess 
  } = useDeleteCategorieHandler(setIsModalOpened);

  const confirmationQuestion = `Voulez-vous vraiment supprimer: "${capitalizedFirstChar(categorieName)}"`;

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleCategorieDeletion = () => {
    mutate({categorieName});
  }

  return (
    <PageContainer>
      <NavBar>
        <>
          <NavBarLinkList links={allSideBarLinks}/>
          <CategorieLiveSearch/>
        </>
      </NavBar>
      <MainPart>
        {isCategoriePending && <PageLoader size={50} color='white'/>}
        {!isCategoriePending && 
          <TchatListContainer>
            <div className={style.header}>
              <CategorieName name={categorieName}/>
              <SearchField 
                style={style}
                type='text'
                value={searchValue}
                placeholder='Rechercher un tchat'
                onInputChange={handleChange}
              />
              <DeleteCategorie onDelete={() => setIsModalOpened(true)}/>
            </div>
            <TchatList tchatList={filteredTchats} />
          </TchatListContainer>
        }
        {isCategorieServerError && <ErrorOnPage error={categorieServerError}/>}
        {isCategorieNotFound && <ErrorOnPage error={categorieNotFoundMess}/>}
      </MainPart>
      {isModalOpened && 
        <ConfirmActionModal 
          onCancel={() => setIsModalOpened(false)}
          onConfirm={handleCategorieDeletion} 
          confirmationQuestion={confirmationQuestion}
          isPending={isDeletionPending}
          isServerError={isDeletionServerError}
          serverErrorMess={deletionServerErrorMess}
        />
      }
    </PageContainer>
  )
}

export default CategoriePage;