import PageContainer from '../../layout/pageContainer/PageContainer';
import NavBar from '../../layout/navBar/NavBar';
import MainPart from '../../layout/mainPart/MainPart';
import SearchField from '../../components/others/SearchField';
import NavBarLinkList from '../../components/navBarUi/navBarLinkList/NavBarLinkList';
import CategorieLiveSearch from '../../components/navBarUi/navBarLiveSearch/CategorieLiveSearch';
import { allSideBarLinks } from '../../constant/SideBarLinks';
import { useParams } from 'react-router-dom';
import useGetSingleCategorieHandler from '../../hooks/useGetSingleCategorieHandler';
import Loader from '../../../../components/others/Loader';
import CategorieName from '../../components/others/categorieName/CategorieName';
import DeleteCategorie from '../../components/others/deleteCategorie/DeleteCategorie';
import TchatList from '../../components/tchatUi/tchatList/TchatList';
import { tchatFilter } from '../../../../utils';
import style from './categoriePage.module.css';
import ConfirmActionModal from '../../components/others/confirmActionModal/ConfirmActionModal';
import { useState } from 'react';
import useConfirmActionModal from '../../hooks/useConfirmActionModal';

const CategoriePage = () => {  
  const { categorieName } = useParams();
  const [searchValue, setSearchValue] = useState('');

  const { setIsModalOpened, isModalOpened} = useConfirmActionModal(categorieName);
  
  const { isPending, tchatList, isServerError, serverError } = useGetSingleCategorieHandler(categorieName);
  const filteredTchats = tchatFilter(tchatList, searchValue);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleCategorieDeletion = () => {
    
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
        {isPending && 
          <div className={`${style.loader} flexRow-allCentered`}>
              <Loader size={40} color='white'/>
          </div>
        }
        {!isPending && 
          <div className={`${style.container} containerAnim`}>
            <div className={`${style.elements} gradientScroll flex-column`}>
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
              {isServerError && <p className={`${style.serverError} error`}>{serverError}</p>}
            </div>
          </div>
        }
      </MainPart>
      {isModalOpened && 
        <ConfirmActionModal 
          onCancel={() => setIsModalOpened(false)}
          onConfirm={handleTchatDeletion} 
          confirmationQuestion={confirmationQuestion}
          isPending={isPending}
          isServerError={isServerError}
          serverErrorMess={serverErrorMess}
        />
      }
    </PageContainer>
  )
}

export default CategoriePage;