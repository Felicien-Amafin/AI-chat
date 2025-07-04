import style from './listError.module.css';

const ListError = ({errorMess}) => {
  return (
    <p className={`${style.message} ${style.listError} error`}>
      {errorMess}
    </p>
  )
}

export default ListError;