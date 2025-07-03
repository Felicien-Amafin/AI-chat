import { IoMdChatboxes } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";
import Icon from "../icon/Icon";
import style from './tchatTopic.module.css';

const TchatTopic = () => {
  return (
    <div className={style.tchatTopic}>
      <div className={style.text}>
        <h3>Tchat du 22-06-2025 </h3>
        <p>Le conflit Israélo-palestinien depuis 1946</p>
      </div>
      <div className={`${style.icons} flex-column`}>
        <Icon color='transRed'><IoMdChatboxes/></Icon>
        <Icon color='delete'><FaRegTrashCan/></Icon>
      </div>
    </div>
  )
}

export default TchatTopic;