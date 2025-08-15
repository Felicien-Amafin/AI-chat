import { IoSendOutline } from "react-icons/io5";
import Loader from "../../../../../components/others/Loader";
import useForm from "../../../../../hooks/useForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSendTchatMessHandler from "../../../hooks/useSendTchatMessHandler";
import style from './tchatContainer.module.css';
import { setAiAnswer, setTchatHistory, setUserQuestion } from "../../../../../store/tchatSlice";
import { capitalizedFirstChar } from "../../../../../utils";

const TchatContainer = ({tchatId}) => {
  const { formData, handleChange, resetForm } = useForm();//Receives user question
  const { mutate, isPending, dialog, isServerError, serverError } = useSendTchatMessHandler();
  
  const dispatch = useDispatch();
  const { userQuestion } = useSelector((state) => state.tchat);
  const { aiAnswer } = useSelector((state) => state.tchat);
  const { tchatHistory } = useSelector((state) => state.tchat);
  const { defaultMess } = useSelector((state) => state.tchat);
  
  const handleMessage = (e) => {
    e.preventDefault();
    if(!formData.prompt) return;

    const userMessage = formData.prompt.toLowerCase();
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
      <div className={style.tchatBox}>
        <section className={`${style.tchat} gradientScroll flex-column`}>
          {!userQuestion && 
            <div className={`${style.defaultMess} flexColumn-allCentered`}>{defaultMess}</div>
          }
          {userQuestion && <p className={style.userQuestion}>{userQuestion}</p>}
          {(!isPending && aiAnswer) && <p className={style.aiAnswer}>{aiAnswer}</p>}
          {isServerError && <p className={`${style.serverError} error`}>{serverError}</p>}
          {isPending && 
            <div className={`${style.waiting} flexRow-allCentered`}>
              <Loader size={25} color='white'/> <p className={style.waitingMess}>Un instant...</p>
            </div>
          }
        </section>
      </div>
      <form className={style.tchatPrompt} onSubmit={handleMessage}>
        <input 
          name="prompt"
          type="text" 
          placeholder="Entrez votre demande"
          value={formData['prompt'] || ''} 
          onChange={handleChange}
          required
          disabled={isPending}
        />
        <button><i><IoSendOutline/></i></button>
      </form>
    </div>
  )
}

export default TchatContainer;