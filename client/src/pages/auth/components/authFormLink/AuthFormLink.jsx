import { Link } from 'react-router-dom';
import style from './authformLink.module.css';

const AuthFormLink = ({children, path}) => {
  return (
    <Link to={path} className={style.link}>{children}</Link>
  )
}

export default AuthFormLink;