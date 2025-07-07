import { FaUser } from "react-icons/fa6";
import style from './navBar.module.css';

const NavBar = ({children}) => {
  return (
    <nav className={`${style.navBar} flex-column`}>
      <div className={`${style.navBarContent} flex-column`}>
        <div className={style.user}>
          <i><FaUser/></i>
          <p>Félicien</p>
        </div>
        {children}
      </div>
    </nav>

  )
}

export default NavBar;