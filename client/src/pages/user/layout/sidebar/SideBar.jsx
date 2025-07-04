import { FaUser } from "react-icons/fa6";
import style from './sideBar.module.css';

const SideBar = ({children}) => {
  return (
    <aside className={`${style.sideBar} flex-column`}>
      <div className={`${style.sideBarContent} flex-column`}>
        <div className={style.user}>
          <i><FaUser/></i>
          <p>Félicien</p>
        </div>
        {children}
      </div>
    </aside>

  )
}

export default SideBar;