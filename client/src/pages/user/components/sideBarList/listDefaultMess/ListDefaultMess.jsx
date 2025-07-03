import style from './listDefaultMess.module.css';

const ListDefaultMess = ({children, defaultMess}) => {
  return (
    <div className={`${style.defaultMess} flex-column`}>
      <p className={style.message}>{defaultMess}</p>
      <i>{children}</i>
    </div>
  )
}

export default ListDefaultMess;