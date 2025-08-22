import useForm from "../../../../../hooks/useForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSendChatMessage from "../../../hooks/useSendChatMessage";
import { setAiAnswer, setChatHistory, setUserQuestion } from "../../../../../store/chatSlice";
import { capitalizedFirstChar, trimAndLowerCase } from "../../../../../utils";
import ChatPrompt from "../chatPrompt/ChatPrompt";
import ChatScreen from "../chatScreen/ChatScreen";
import style from './chatContainer.module.css';

const ChatContainer = ({chatId}) => {
  const { formData, handleChange, resetForm } = useForm();//Receives user question
  const { mutate, isPending, dialog, isServerError, serverError } = useSendChatMessage();
  
  const dispatch = useDispatch();

  const { userQuestion, aiAnswer, chatHistory } = useSelector((state) => state.chat);

  const handleMessageSubmission = (e) => {
    e.preventDefault();
    const newFormData = trimAndLowerCase(formData);
    const userMessage = newFormData.prompt;

    if(!userMessage) return;

    dispatch(setUserQuestion(capitalizedFirstChar(userMessage)));
 
    mutate({//Submit chat data to db
      user_message: userMessage,
      chat_history: chatHistory,
      chat_id: chatId
    });
    
    resetForm();
  };

  useEffect(() => {
    if(dialog) {
      dispatch(setChatHistory(dialog));//Dialog = user question + ai response
      dispatch(setAiAnswer(dialog.answer));
    }

  },[dialog, dispatch]);

  return (
    <div className={`${style.chatContainer} containerAnim flex-column`}>
      <ChatScreen
        userQuestion={userQuestion}
        aiAnswer={aiAnswer}
        isPending={isPending}
        isServerError={isServerError}
        serverError={serverError}
      />
      <ChatPrompt
        onSubmit={handleMessageSubmission}
        value={formData['prompt'] || ''}
        onInputChange={handleChange}
        isPending={isPending}
      />
    </div>
  )
}

export default ChatContainer;