import style from './formErrorMess.module.css';

const FormErrorMess = ({error}) => {
  return (
    <p className={`${style.error} error messAnim`}>
        {error}
    </p>
  )
}

export default FormErrorMess;