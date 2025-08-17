import { FaRegTrashCan } from "react-icons/fa6";
import WidgetIcon from "../widgetIcon/WidgetIcon";
import useConfirmActionModal from "../../../hooks/useConfirmActionModal";
import ConfirmActionModal from "../../others/confirmActionModal/ConfirmActionModal";
import { capitalizedFirstChar, truncateString } from "../../../../../utils";
import style from './widgetTchatTopic.module.css';
import { useParams } from "react-router-dom";
import useDeleteTchatHandler from "../../../hooks/useDeleteTchatHandler";

const WidgetTchatTopic = ({tchat}) => {
  const { setIsModalOpened, isModalOpened } = useConfirmActionModal(null);
  const tchatTitle = truncateString(tchat[1].title, 25);
  const confirmationQuestion = `Voulez-vous vraiment supprimer: "${capitalizedFirstChar(tchatTitle)}"`;

  const { categorieName } = useParams();
  const invalidateKey = `categories-${categorieName}`;
  const { mutate, isPending, isServerError, serverErrorMess } = useDeleteTchatHandler(setIsModalOpened);

 /*  const handleTchatSelection = () => {
    console.log(tchat)
  } */

  const handleModalDisplay = (e) => {
    e.stopPropagation();
    setIsModalOpened(true);
  }

  const handleTchatDeletion = () => {
    mutate({ tchat_id:tchat[0], invalidateKey});
  }
  
  return (
    <>
      <div className={style.tchatTopic} /* onClick={handleTchatSelection} */>
        <div className={style.text}>
          <h3>Tchat du {tchat[1].date}</h3>
          <p>{capitalizedFirstChar(tchat[1].title)}</p>
        </div>
        <button 
          className={`${style.deleteTchat} flex-column`} 
          onClick={handleModalDisplay}
          disabled={isPending}
        >
          <WidgetIcon color='delete'><FaRegTrashCan/></WidgetIcon>
        </button>
      </div>
      {isModalOpened && 
        <ConfirmActionModal 
          onCancel={() => setIsModalOpened(false)}
          onConfirm={handleTchatDeletion} 
          confirmationQuestion={confirmationQuestion}
          isPending={isPending}
          isServerError={isServerError}
          serverErrorMess={serverErrorMess}
        />
      }
    </>
  )
}

export default WidgetTchatTopic;