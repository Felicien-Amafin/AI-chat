import { Link } from "react-router-dom";
import style from './option.module.css';

const Option = ({children, path, text}) => {
  return (
    <li className={style.option}>
      <i className={style.icon}>{children}</i>
      <Link to={path} className={style.link}>{text}</Link>
    </li>
  )
}

export default Option;