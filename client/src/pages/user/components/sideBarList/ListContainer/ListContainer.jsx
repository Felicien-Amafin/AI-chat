import style from './listContainer.module.css';

const ListContainer = ({children}) => {
  return (
    <div className={`${style.listContainer} flex-column`}>
      {children}
    </div>
  )
}

export default ListContainer;