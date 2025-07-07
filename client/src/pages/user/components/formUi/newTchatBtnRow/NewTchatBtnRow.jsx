import style from './newTchatBtnRow.module.css';

const NewTchatBtnRow = () => {
  return (
    <div className={style.btns}>
        <button className={style.selected}>Nouvelle catégorie</button>
        <button className={style.unSelected}>Catégorie existante</button>
    </div>
  )
}

export default NewTchatBtnRow;