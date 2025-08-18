import useForm from "../../../../../hooks/useForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSendTchatMessHandler from "../../../hooks/useSendTchatMessHandler";
import { setAiAnswer, setTchatHistory, setUserQuestion } from "../../../../../store/tchatSlice";
import { capitalizedFirstChar, trimAndLowerCase } from "../../../../../utils";
import TchatPrompt from "../tchatPrompt/TchatPrompt";
import TchatScreen from "../tchatScreen/TchatScreen";
import style from './tchatContainer.module.css';

const TchatContainer = ({tchatId}) => {
  const { formData, handleChange, resetForm } = useForm();//Receives user question
  const { mutate, isPending, dialog, isServerError, serverError } = useSendTchatMessHandler();
  
  const dispatch = useDispatch();

  const { userQuestion, aiAnswer, tchatHistory } = useSelector((state) => state.tchat);

  const handleMessageSubmission = (e) => {
    e.preventDefault();
    const newFormData = trimAndLowerCase(formData);
    const userMessage = newFormData.prompt;

    if(!userMessage) return;

    dispatch(setUserQuestion(capitalizedFirstChar(userMessage)));
 
    mutate({//Submit tchat data to db
      user_message: userMessage,
      tchat_history: tchatHistory,
      tchat_id: tchatId
    });
    
    resetForm();
  };

  useEffect(() => {
    if(dialog) {
      dispatch(setTchatHistory(dialog));//Dialog = user question + ai response
      dispatch(setAiAnswer(dialog.answer));
    }

  },[dialog, dispatch]);

  return (
    <div className={`${style.tchatContainer} containerAnim flex-column`}>
      <TchatScreen
        userQuestion={userQuestion}
        aiAnswer={aiAnswer}
        isPending={isPending}
        isServerError={isServerError}
        serverError={serverError}
      />
      <TchatPrompt
        onSubmit={handleMessageSubmission}
        value={formData['prompt'] || ''}
        onInputChange={handleChange}
        isPending={isPending}
      />
    </div>
  )
}

export default TchatContainer;