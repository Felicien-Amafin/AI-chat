import style from './tchatPrompt.module.css';
import { IoSendOutline } from "react-icons/io5";

const TchatPrompt = ({onSubmit, value, onInputChange, isPending}) => {
  return (
    <form className={style.tchatPrompt} onSubmit={(e) => onSubmit(e)}>
        <input 
          name="prompt"
          type="text" 
          placeholder="Entrez votre demande"
          value={value} 
          onChange={(e) => onInputChange(e)}
          required
          disabled={isPending}
        />
        <button type="submit" aria-label="Envoyer message"><i><IoSendOutline/></i></button>
    </form>
  )
}

export default TchatPrompt;