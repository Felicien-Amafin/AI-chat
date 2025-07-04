import PageContainer from '../../layout/pageContainer/PageContainer';
import SideBar from '../../layout/sidebar/SideBar';
import MainPart from '../../layout/mainPart/MainPart';
import Widget from '../../components/widgetUi/widget/Widget';
import { FaRegTrashAlt } from "react-icons/fa";
import SearchField from '../../components/SearchField';
import CategoriesList from '../../components/sideBar/listUi/categorieList/CategoriesList';
import WidgetTchatTopic from '../../components/widgetUi/widgetTchatTopic/WidgetTchatTopic';
import OptionList from '../../components/sideBar/optionUi/optionList/OptionList';
import { genericSideBarOptions } from '../../userConstant';
import style from './categoriePage.module.css';

const CategoriePage = () => {
  
  return (
    <PageContainer>
      <SideBar>
        <>
          <OptionList options={genericSideBarOptions}/>
          <CategoriesList/>
        </>
      </SideBar>
      <MainPart>
        <div className={style.container}>
          <div className={`${style.elements} flex-column`}>
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
              </div>
            </div>
          </div>
        </div>
      </MainPart>
    </PageContainer>
  )
}

export default CategoriePage;