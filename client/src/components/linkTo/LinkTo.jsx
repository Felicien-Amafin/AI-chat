import { Link } from 'react-router-dom';
import style from './linkTo.module.css';

const LinkTo = ({children, path, className}) => {
  return (
    <Link to={path} className={`${className} ${style.linkTo}`}>{children}</Link>
  )
}

export default LinkTo;