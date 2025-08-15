import style from './widget.module.css';

const Widget = ({children}) => {
  return (
    <div className={style.widget}>{children}</div>
  )
}

export default Widget;