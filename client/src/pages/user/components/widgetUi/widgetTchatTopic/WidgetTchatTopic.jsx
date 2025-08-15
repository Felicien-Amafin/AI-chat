import { FaRegTrashCan } from "react-icons/fa6";
import WidgetIcon from "../widgetIcon/WidgetIcon";
import style from './widgetTchatTopic.module.css';
import { capitalizedFirstChar } from "../../../../../utils";

const WidgetTchatTopic = ({tchat}) => {
  return (
    <div className={style.tchatTopic}>
      <div className={style.text}>
        <h3>Tchat du {tchat[1].date}</h3>
        <p>{capitalizedFirstChar(tchat[1].title)}</p>
      </div>
      <div className={`${style.icon} flex-column`}>
        <WidgetIcon color='delete'><FaRegTrashCan/></WidgetIcon>
      </div>
    </div>
  )
}

export default WidgetTchatTopic;