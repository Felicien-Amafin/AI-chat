import Loader from '../../../../../components/others/Loader';
import style from './confirmActionModal.module.css';
import ReactDOM from "react-dom";

const ConfirmActionModal = ({onCancel, onConfirm, confirmationQuestion, isPending, isServerError, serverErrorMess}) => {

  return ReactDOM.createPortal(
    <div className={`${style.modal} flexColumn-allCentered `}>
      <div className={`${style.alert} flexColumn-allCentered `}>
        <div className={`${style.text} flex-column`}>
          <p className={style.question}>{(confirmationQuestion)}</p>
          {isServerError && <p className={`${style.serverError} error`}>{serverErrorMess}</p>}
        </div>
        <div className={style.btns}>
          <button 
            className={style.btn}
            onClick={() => onCancel()}
            disabled={isPending}
            >
              Annuler
          </button>
          <button 
            className={style.btn}
            onClick={() => onConfirm()}
            disabled={isPending}
          >
            {isPending ? <Loader size={10}/> : 'Supprimer'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ConfirmActionModal;