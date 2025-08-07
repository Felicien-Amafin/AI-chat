import { IoSendOutline } from "react-icons/io5";
import style from './tchatContainer.module.css';
import useForm from "../../../../../hooks/useForm";
import { useEffect, useState } from "react";
import useSendTchatMessHandler from "../../../hooks/useSendTchatMessHandler";

const TchatContainer = ({tchatId}) => {
  const { formData, handleChange, resetForm } = useForm();
  const [tchatHistory, setChatHistory] = useState([]);
  const { mutate } = useSendTchatMessHandler();

  const defaultMess = 'Comment puis-je vous aider?';

  const handleMessage = (e) => {
    e.preventDefault();
    if(!formData.prompt) return;

    mutate({
      user_message: formData.prompt,
      tchat_history: tchatHistory,
      tchat_id: tchatId
    });
    
    resetForm();
  }

  return (
    <div className={`${style.tchatContainer} containerAnim flex-column`}>
      <div className={style.tchatBox}>
        <section className={`${style.tchat} gradientScroll flex-column`}>
          <div className={`${style.defaultMess} flexColumn-allCentered`}>{defaultMess}</div>
          <p className={style.userQuestion}></p>
          <p className={style.aiAnswer}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quisquam voluptatum, blanditiis minus ipsa deserunt esse aliquid velit labore assumenda eius unde ut est odio corporis quam dolorem ex expedita.</p>
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
        />
        <button><i><IoSendOutline/></i></button>
      </form>
    </div>
  )
}

export default TchatContainer;