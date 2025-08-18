import { FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { capitalizedFirstChar } from "../../../../utils";
import style from './navBar.module.css';
import useZoom from "../../hooks/useZoom";

const NavBar = ({children}) => {
  const { user } = useSelector((state) => state.auth);
  const userName = capitalizedFirstChar(user?.username);
  const isZoomed = useZoom();

  return (
    <nav className={`${style.navBar} flex-column ${isZoomed ? 'greyScroll' : ''}`}>
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