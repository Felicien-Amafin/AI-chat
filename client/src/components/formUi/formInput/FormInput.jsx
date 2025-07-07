import { useState } from 'react'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import style from './formInput.module.css';

const FormInput = ({ input, error, value, required, onInputChange }) => {
  const [isPwrdVisible, setIsPwrdVisible] = useState(false);
  
  const isPassword = input.type === 'password';
  const passwdInputType = isPwrdVisible ? 'text' : 'password';
  const isError = error && error[input?.name] ? true : null;

  const handleInputChange = (e)=> {
    onInputChange ? onInputChange(e) : null;
  }

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
          onChange={handleInputChange}
        />
          {isPassword && 
          <span 
            className={style.icon}
            onClick={()=> setIsPwrdVisible((isVisible)=> !isVisible)}>
            {isPwrdVisible ? <IoEye/> : <IoMdEyeOff/>}
          </span>}
      </div>
      {isError && <p className={`${style.error} error messAnim`}>
        {error[input?.name]}
      </p>}
    </div>
  )
}

export default FormInput;