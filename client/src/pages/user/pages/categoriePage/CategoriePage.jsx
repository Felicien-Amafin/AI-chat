import PageContainer from '../../layout/pageContainer/PageContainer';
import SideBar from '../../layout/sidebar/SideBar';
import MainPart from '../../layout/mainPart/MainPart';
import Widget from '../../components/widget/Widget';
import { FaRegTrashAlt } from "react-icons/fa";
import TchatTopic from '../../components/tchatTopic/TchatTopic';
import SearchField from '../../components/SearchField';
import style from './categoriePage.module.css';
import CategoriesList from '../../components/sideBarList/categorieList/CategoriesList';

const CategoriePage = () => {
  
  return (
    <PageContainer>
      <SideBar><CategoriesList/></SideBar>
      <MainPart>
        <div className={style.container}>
          <div className={`${style.elements} flex-column`}>
            <div className={style.header}>
              <div className={style.categorie}>
                <p>Catgégorie/ Histoire de l'art</p>
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
                <Widget>
                  <TchatTopic/>
                </Widget>
                
                
              
                
              
              </div>
            </div>
          </div>
        </div>
      </MainPart>
    </PageContainer>
  )
}

export default CategoriePage;