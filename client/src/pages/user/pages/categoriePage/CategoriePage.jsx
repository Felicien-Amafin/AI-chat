import PageContainer from '../../layout/pageContainer/PageContainer';
import NavBar from '../../layout/navBar/NavBar';
import MainPart from '../../layout/mainPart/MainPart';
import Widget from '../../components/widgetUi/widget/Widget';
import { FaRegTrashAlt } from "react-icons/fa";
import SearchField from '../../components/SearchField';
import NavBarLinkList from '../../components/navBarUi/navBarLinkList/NavBarLinkList';
import CategorieLiveSearch from '../../components/navBarUi/navBarLiveSearch/CategorieLiveSearch';
import WidgetTchatTopic from '../../components/widgetUi/widgetTchatTopic/WidgetTchatTopic';
import { allSideBarLinks } from '../../constant/SideBarLinks';
import style from './categoriePage.module.css';

const CategoriePage = () => {
  return (
    <PageContainer>
      <NavBar>
        <>
          <NavBarLinkList links={allSideBarLinks}/>
          <CategorieLiveSearch/>
        </>
      </NavBar>
      <MainPart>
        <div className={`${style.container} containerAnim`}>
          <div className={`${style.elements} gradientScroll flex-column`}>
            <div className={style.header}>
              <div className={style.categorie}>
                <p>Catgégorie/ Histoire</p>
              </div>
              <SearchField 
                style={style}
                type
                value=''
                placeholder='Rechercher un tchat'
                onInputChange
              />
              <button className={style.delete}>
                <i><FaRegTrashAlt/></i>
                <p>Supprimer la catégorie</p>
              </button>
            </div>
            <div className={`${style.tchatsContainer} content`}>
              <div className={style.tchats}>
                <Widget><WidgetTchatTopic/></Widget>
                <Widget><WidgetTchatTopic/></Widget>
                <Widget><WidgetTchatTopic/></Widget>
                <Widget><WidgetTchatTopic/></Widget>
                <Widget><WidgetTchatTopic/></Widget>
                <Widget><WidgetTchatTopic/></Widget>
                <Widget><WidgetTchatTopic/></Widget>
                <Widget><WidgetTchatTopic/></Widget>
                <Widget><WidgetTchatTopic/></Widget>
                <Widget><WidgetTchatTopic/></Widget>
                <Widget><WidgetTchatTopic/></Widget>
                <Widget><WidgetTchatTopic/></Widget>
              </div>
            </div>
          </div>
        </div>
      </MainPart>
    </PageContainer>
  )
}

export default CategoriePage;