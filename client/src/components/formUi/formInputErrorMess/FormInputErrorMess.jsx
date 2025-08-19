import style from './formInputErrorMess.module.css';

const FormInputErrorMess = ({error}) => {
  return (
    <p className={`${style.error} error messAnim`}>
        {error}
    </p>
  )
}

export default FormInputErrorMess;