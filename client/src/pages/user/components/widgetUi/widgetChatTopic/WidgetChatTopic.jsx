import { FaRegTrashCan } from "react-icons/fa6";
import WidgetIcon from "../widgetIcon/WidgetIcon";
import useConfirmActionModal from "../../../hooks/useConfirmActionModal";
import ConfirmActionModal from "../../others/confirmActionModal/ConfirmActionModal";
import { capitalizedFirstChar, truncateString } from "../../../../../utils";
import style from './widgetChatTopic.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { resetChat } from "../../../../../store/chatSlice";
import useDeleteChat from "../../../hooks/useDeleteChat";

const WidgetChatTopic = ({chat}) => {
  const { setIsModalOpened, isModalOpened } = useConfirmActionModal(null);
  const chatTitle = truncateString(chat[1].title, 25);
  const confirmationQuestion = `Voulez-vous vraiment supprimer: "${capitalizedFirstChar(chatTitle)}"`;

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { categoryName } = useParams();
  const invalidateKey = `categories-${categoryName}`;
  const { mutate, isPending, isServerError, serverErrorMess } = useDeleteChat(setIsModalOpened);

  const handleChatSelection = () => {
    //Reset chat state to initial state before starting a new chat
    dispatch(resetChat()); 

    // Clear chat's questions list from cache before starting new chat
    queryClient.removeQueries({ queryKey: ['chat-messages'] }); 

    navigate(`/user/chat/${chat[0]}`)//Navigate to specific chat's page
  }

  const handleModalDisplay = (e) => {
    e.stopPropagation();
    setIsModalOpened(true);
  }

  const handleChatDeletion = () => {
    mutate({ chat_id:chat[0], invalidateKey});
  }
  
  return (
    <>
      <div className={style.chatTopic} onClick={handleChatSelection}>
        <div className={style.text}>
          <h3>chat du {chat[1].date}</h3>
          <p>{capitalizedFirstChar(chat[1].title)}</p>
        </div>
        <div>
          <button 
            className={`${style.deleteChat} flex-column`} 
            onClick={handleModalDisplay}
            disabled={isPending}
            aria-label="Supprimer le chat"
          >
            <WidgetIcon color='delete'><FaRegTrashCan/></WidgetIcon>
          </button>
        </div>
      </div>
      {isModalOpened && 
        <ConfirmActionModal 
          onCancel={() => setIsModalOpened(false)}
          onConfirm={handleChatDeletion} 
          confirmationQuestion={confirmationQuestion}
          isPending={isPending}
          isServerError={isServerError}
          serverErrorMess={serverErrorMess}
        />
      }
    </>
  )
}

export default WidgetChatTopic;