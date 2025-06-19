import { useState } from 'react'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

const FormInput = ({style, input, value, required, onInputChange }) => {
  const [isPwrdVisible, setIsPwrdVisible] = useState(false);
  
  const isPassword = input.type === 'password';
  const passwdInputType = isPwrdVisible ? 'text' : 'password';

  return (
    <div className={`${style.inputBox} flex-column`}>
      <label htmlFor={input.name}>{input.label}</label>
      <div className={style.inputField}>
        <input 
          type={isPassword ? passwdInputType : input.type}
          name={input.name} 
          placeholder={input.placeholder}
          required={required}
          value={value || ''}
        />
          {isPassword && 
          <span 
            className={style.icon}
            onClick={()=> setIsPwrdVisible((isVisible)=> !isVisible)}>
            {isPwrdVisible ? <IoEye/> : <IoMdEyeOff/>}
          </span>}
      </div>
      {/* <p className={style.error}>Nom d'utilisateur invalide (5 caractères min, 10 max)</p> */}
    </div>
  )
}

export default FormInput;