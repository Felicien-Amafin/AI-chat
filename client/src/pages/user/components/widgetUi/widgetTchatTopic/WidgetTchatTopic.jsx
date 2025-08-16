import { FaRegTrashCan } from "react-icons/fa6";
import WidgetIcon from "../widgetIcon/WidgetIcon";
import style from './widgetTchatTopic.module.css';
import { capitalizedFirstChar } from "../../../../../utils";

const WidgetTchatTopic = ({tchat}) => {

  const handleTchatSelection = () => {
    console.log(tchat)
  }

  const handleTchatDeletion = (e) => {
    e.stopPropagation();
    console.log('deleting tchat...')
  }

  return (
    <div className={style.tchatTopic} onClick={handleTchatSelection}>
      <div className={style.text}>
        <h3>Tchat du {tchat[1].date}</h3>
        <p>{capitalizedFirstChar(tchat[1].title)}</p>
      </div>
      <button 
        className={`${style.deleteTchat} flex-column`} 
        onClick={handleTchatDeletion}
      >
        <WidgetIcon color='delete'><FaRegTrashCan/></WidgetIcon>
      </button>
    </div>
  )
}

export default WidgetTchatTopic;