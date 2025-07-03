import style from './icon.module.css';

const Icon = ({children, color}) => {
  return (
    <i className={`${style.icon} ${style[color]}`}>{children}</i>
  )
}

export default Icon;