import { Link } from 'react-router-dom';
import style from './formLink.module.css';

const FormLink = ({children, path}) => {
  return (
    <Link to={path} className={style.link}>{children}</Link>
  )
}

export default FormLink;