import { FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { capitalizedFirstChar } from "../../../../utils";
import style from './navBar.module.css';

const NavBar = ({children}) => {
  const { user } = useSelector((state) => state.auth);
  const userName = user ? capitalizedFirstChar(user.username) : '';

  return (
    <nav className={`${style.navBar} greyScroll flex-column`}>
      <div className={`${style.navBarContent} flex-column`}>
        <div className={style.user}>
          <i><FaUser/></i>
          <p>{userName}</p>
        </div>
        {children}
      </div>
    </nav>
  )
}

export default NavBar;