import style from './tchatListContainer.module.css';

const TchatListContainer = ({children}) => {
  return (
    <div className={`${style.container} containerAnim`}>
        <div className={`${style.elements} gradientScroll flex-column`}>
            {children}
        </div>
    </div>
  )
}

export default TchatListContainer;