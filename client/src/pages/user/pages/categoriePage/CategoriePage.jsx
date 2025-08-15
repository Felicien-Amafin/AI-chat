import PageContainer from '../../layout/pageContainer/PageContainer';
import NavBar from '../../layout/navBar/NavBar';
import MainPart from '../../layout/mainPart/MainPart';
import Widget from '../../components/widgetUi/widget/Widget';
import SearchField from '../../components/others/SearchField';
import NavBarLinkList from '../../components/navBarUi/navBarLinkList/NavBarLinkList';
import CategorieLiveSearch from '../../components/navBarUi/navBarLiveSearch/CategorieLiveSearch';
import WidgetTchatTopic from '../../components/widgetUi/widgetTchatTopic/WidgetTchatTopic';
import { allSideBarLinks } from '../../constant/SideBarLinks';
import { useParams } from 'react-router-dom';
import style from './categoriePage.module.css';
import useGetSingleCategorieHandler from '../../hooks/useGetSingleCategorieHandler';
import Loader from '../../../../components/others/Loader';
import CategorieName from '../../components/others/categorieName/CategorieName';
import DeleteCategorie from '../../components/others/deleteCategorie/DeleteCategorie';
import TchatList from '../../components/tchatUi/tchatList/TchatList';

const CategoriePage = () => {
  const { categorieName } = useParams();
  const { isPending, tchatList, isServerError, serverError } = useGetSingleCategorieHandler(categorieName);

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
                  type
                  value=''
                  placeholder='Rechercher un tchat'
                  /* onInputChange */
                />
                <DeleteCategorie/>
              </div>
              <TchatList tchatList={tchatList}/>
              {isServerError && <p className={`${style.serverError} error`}>{serverError}</p>}
            </div>
          </div>
        }
      </MainPart>
    </PageContainer>
  )
}

export default CategoriePage;