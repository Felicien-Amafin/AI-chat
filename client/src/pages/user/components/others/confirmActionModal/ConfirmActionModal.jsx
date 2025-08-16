import style from './confirmActionModal.module.css';

const ConfirmActionModal = () => {
  return (
    <div className={`${style.modal} flexColumn-allCentered `}>
        <div className={`${style.alert} flexColumn-allCentered `}>
            <p className={style.message}>Voulez-vous vraiment supprimer?</p>
            <div className={style.btns}>
                <button className={style.btn}>Annuler</button>
                <button className={style.btn}>Supprimer</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmActionModal;