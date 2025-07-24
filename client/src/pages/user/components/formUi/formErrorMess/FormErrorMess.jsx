import style from './formErrorMess.module.css';

const FormErrorMess = ({error}) => {
  return (
    <div className={`${style.errorContainer} flex-column`}>
        <p className={`${style.error} error`}>{error}</p>
    </div>
  )
}

export default FormErrorMess;