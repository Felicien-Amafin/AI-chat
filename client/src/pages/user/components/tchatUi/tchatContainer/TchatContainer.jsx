import TchatPrompt from '../tchatPrompt/TchatPrompt';
import Tchat from '../tchat/Tchat';
import style from './tchatContainer.module.css';

const TchatContainer = () => {
  return (
    <div className={`${style.tchatContainer} containerAnim flex-column`}>
        <Tchat/>
        <TchatPrompt/>
    </div>
  )
}

export default TchatContainer;