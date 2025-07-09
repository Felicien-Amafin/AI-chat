import { IoSendOutline } from "react-icons/io5";
import style from './tchatPrompt.module.css';

const TchatPrompt = () => {
  return (
    <form className={style.tchatPrompt}>
      <input type="text" placeholder="Entrez votre demande"/>
      <button><i><IoSendOutline/></i></button>
    </form>
  )
}

export default TchatPrompt;