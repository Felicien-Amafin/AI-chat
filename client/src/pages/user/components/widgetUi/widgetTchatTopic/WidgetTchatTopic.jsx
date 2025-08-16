import { FaRegTrashCan } from "react-icons/fa6";
import WidgetIcon from "../widgetIcon/WidgetIcon";
import useConfirmActionModal from "../../../hooks/useConfirmActionModal";
import ConfirmActionModal from "../../others/confirmActionModal/ConfirmActionModal";
import { capitalizedFirstChar } from "../../../../../utils";
import style from './widgetTchatTopic.module.css';

const WidgetTchatTopic = ({tchat}) => {
  const { setIsModalOpened, setIsConfirmed, isModalOpened, isConfirmed } = useConfirmActionModal(null);

  const handleTchatSelection = () => {
    console.log(tchat)
  }

  const handleTchatDeletion = (e) => {
    e.stopPropagation();
    setIsModalOpened(true);
  }

  return (
    <>
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
      {isModalOpened && 
        <ConfirmActionModal 
          onCancel={() => setIsModalOpened(false)}
          onConfirm={() => setIsConfirmed(true)} 
        />
      }
    </>
  )
}

export default WidgetTchatTopic;