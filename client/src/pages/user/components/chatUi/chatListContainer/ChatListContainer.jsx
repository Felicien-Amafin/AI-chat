import style from './chatListContainer.module.css';

const ChatListContainer = ({children}) => {
  return (
    <div className={`${style.container} containerAnim`}>
        <div className={`${style.elements} gradientScroll flex-column`}>
            {children}
        </div>
    </div>
  )
}

export default ChatListContainer;