import PageContainer from '../../layout/pageContainer/PageContainer';
import NavBar from '../../layout/navBar/NavBar';
import MainPart from '../../layout/mainPart/MainPart';
import SearchField from '../../components/others/SearchField';
import NavBarLinkList from '../../components/navBarUi/navBarLinkList/NavBarLinkList';
import CategoryLiveSearch from '../../components/navBarUi/navBarLiveSearch/CategoryLiveSearch';
import CategoryName from '../../components/others/categoryName/CategoryName';
import DeleteCategory from '../../components/others/deleteCategory/DeleteCategory';
import ChatList from '../../components/chatUi/chatList/ChatList';
import ConfirmActionModal from '../../components/others/confirmActionModal/ConfirmActionModal';
import { allSideBarLinks } from '../../constant/SideBarLinks';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useConfirmActionModal from '../../hooks/useConfirmActionModal';
import { capitalizedFirstChar } from '../../../../utils';
import style from './categoryPage.module.css';
import PageLoader from '../../../../components/others/pageLoader/PageLoader';
import ChatListContainer from '../../components/chatUi/chatListContainer/ChatListContainer';
import ErrorOnPage from '../../components/others/errorOnPage/ErrorOnPage';
import useGetCategory from '../../hooks/useGetCategory';
import useDeleteCategory from '../../hooks/useDeleteCategory';

const CategoryPage = () => {  
  const [searchValue, setSearchValue] = useState('');
  const { categoryName } = useParams();
  const { setIsModalOpened, isModalOpened } = useConfirmActionModal(categoryName);

  const { 
    isCategoryPending, 
    chatList, 
    isCategoryServerError, 
    categoryServerError, 
    isCategoryNotFound, 
    categoryNotFoundMess
  } = useGetCategory(categoryName);

  const { 
    mutate, 
    isDeletionPending, 
    isDeletionServerError, 
    deletionServerErrorMess 
  } = useDeleteCategory(setIsModalOpened);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleCategoryDeletion = () => {
    mutate({categoryName});
  }
  
  const confirmationQuestion = `Voulez-vous vraiment supprimer: "${capitalizedFirstChar(categoryName)}"`;
  
  return (
    <PageContainer>
      <NavBar>
        <>
          <NavBarLinkList links={allSideBarLinks}/>
          <CategoryLiveSearch/>
        </>
      </NavBar>
      <MainPart>
        {isCategoryPending && <PageLoader size={50} color='white'/>}
        {chatList && 
          <ChatListContainer>
            <div className={style.header}>
              <CategoryName name={categoryName}/>
              <SearchField 
                style={style}
                type='text'
                value={searchValue}
                placeholder='Rechercher un chat'
                onInputChange={handleChange}
              />
              <DeleteCategory onDelete={() => setIsModalOpened(true)}/>
            </div>
            <ChatList chatList={chatList} searchValue={searchValue} />
          </ChatListContainer>
        }
        {isCategoryServerError && <ErrorOnPage error={categoryServerError}/>}
        {isCategoryNotFound && <ErrorOnPage error={categoryNotFoundMess}/>}
      </MainPart>
      {isModalOpened && 
        <ConfirmActionModal 
          onCancel={() => setIsModalOpened(false)}
          onConfirm={handleCategoryDeletion} 
          confirmationQuestion={confirmationQuestion}
          isPending={isDeletionPending}
          isServerError={isDeletionServerError}
          serverErrorMess={deletionServerErrorMess}
        />
      }
    </PageContainer>
  )
}

export default CategoryPage;