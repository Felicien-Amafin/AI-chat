import useForm from "../../../../../hooks/useForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSendChatMessage from "../../../hooks/useSendChatMessage";
import { setAiAnswer, setChatHistory } from "../../../../../store/chatSlice";
import ChatPrompt from "../chatPrompt/ChatPrompt";
import ChatScreen from "../chatScreen/ChatScreen";
import style from './chatContainer.module.css';
import useSendSuggestedQuestion from "../../../hooks/useSendSuggestedQuestion";

const ChatContainer = ({chatId}) => {
  const dispatch = useDispatch();
  const { userQuestion, aiAnswer, chatHistory } = useSelector((state) => state.chat);
  const { formData, handleChange, resetForm } = useForm();//Receives user question
 
  const { 
    handlePromptMessageSubmission, 
    submitMessage, 
    isPending, 
    dialog, 
    isError, 
    errorMessage 
  } = useSendChatMessage();

  //Sends suggested chat question, if user clicks on user Home page widgets
  useSendSuggestedQuestion({submitMessage, chatHistory, chatId, userQuestion});

  const handleSubmission = (e) => {
    e.preventDefault();
    handlePromptMessageSubmission({formData, resetForm, chatHistory, chatId});
  }

  useEffect(() => {
    if(dialog) {
      dispatch(setAiAnswer(dialog.answer));
    }

  },[dialog, dispatch]);

  return (
    <div className={`${style.chatContainer} containerAnim flex-column`}>
      <ChatScreen
        userQuestion={userQuestion}
        aiAnswer={aiAnswer}
        isPending={isPending}
        isError={isError}
        errorMessage={errorMessage}
      />
      <ChatPrompt
        onSubmit={handleSubmission}
        value={formData['prompt'] || ''}
        onInputChange={handleChange}
        isPending={isPending}
      />
    </div>
  )
}

export default ChatContainer;