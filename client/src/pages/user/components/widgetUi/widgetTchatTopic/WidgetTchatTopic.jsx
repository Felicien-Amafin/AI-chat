import { IoMdChatboxes } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";
import WidgetIcon from "../widgetIcon/WidgetIcon";
import style from './widgetTchatTopic.module.css';

const WidgetTchatTopic = () => {
  return (
    <div className={style.tchatTopic}>
      <div className={style.text}>
        <h3>Tchat du 22-06-2025 </h3>
        <p>Le conflit Israélo-palestinien depuis 1946 jusqu`à nos jour.</p>
      </div>
      <div className={`${style.icon} flex-column`}>
        <WidgetIcon color='delete'><FaRegTrashCan/></WidgetIcon>
      </div>
    </div>
  )
}

export default WidgetTchatTopic;