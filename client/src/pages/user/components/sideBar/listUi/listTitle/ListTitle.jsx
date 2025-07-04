import style from './listTitle.module.css';

const ListTitle = ({title}) => {
  return (
    <h2 className={style.title}>{title}</h2>
  )
}

export default ListTitle;