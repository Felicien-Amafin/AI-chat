import style from './widgetIcon.module.css';

const WidgetIcon = ({children, color}) => {
  return (
    <i className={`${style.icon} ${style[color]}`}>{children}</i>
  )
}

export default WidgetIcon;