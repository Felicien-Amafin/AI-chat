import { Link } from "react-router-dom";
import style from './navBarPageLink.module.css';

const NavBarPageLink = ({children, path, text}) => {
  return (
    <li className={style.linkBox}>
      <i className={style.icon}>{children}</i>
      <Link to={path} className={style.link}>{text}</Link>
    </li>
  )
}

export default NavBarPageLink;