
const ListContainer = ({children, style}) => {
  return (
    <div className={`${style} flex-column`}>
      {children}
    </div>
  )
}

export default ListContainer;