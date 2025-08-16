import style from './confirmActionModal.module.css';
import ReactDOM from "react-dom";

const ConfirmActionModal = ({onCancel, onConfirm}) => {

  return ReactDOM.createPortal(
    <div className={`${style.modal} flexColumn-allCentered `}>
        <div className={`${style.alert} flexColumn-allCentered `}>
            <p className={style.message}>Voulez-vous vraiment supprimer?</p>
            <div className={style.btns}>
                <button 
                  className={style.btn}
                  onClick={() => onCancel()}
                  >
                    Annuler
                  </button>
                <button 
                  className={style.btn}
                  onClick={() => onConfirm()}
                >
                  Supprimer
                </button>
            </div>
        </div>
    </div>,
    document.body
  )
}

export default ConfirmActionModal;