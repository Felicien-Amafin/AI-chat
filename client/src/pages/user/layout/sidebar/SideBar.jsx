import { BsChatRightText } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CategoriesList from "../../components/sideBarList/categorieList/CategoriesList";
import style from './sideBar.module.css';

const SideBar = ({children}) => {
  return (
    <aside className={`${style.sideBar} flex-column`}>
      <div className={`${style.sideBarContent} flex-column`}>
        <div className={style.user}>
          <i><FaUser/></i>
          <p>Félicien</p>
        </div>
        <div className={style.newTchat}>
          <i className={style.icon}><BsChatRightText/></i>
          <Link to='/' className={style.link}>Nouvelle discussion</Link>
        </div>
        {children}
      </div>
    </aside>

  )
}

export default SideBar;