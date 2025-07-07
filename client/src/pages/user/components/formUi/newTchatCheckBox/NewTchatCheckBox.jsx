import style from './newTchatCheckBox.module.css';

const NewTchatCheckBox = ({children, isChecked}) => {
  return (
    <div className={style.checkBox}>
        <input type="checkbox" id='categorie' name='categorie' checked={isChecked}/>
        <label htmlFor='categorie'>{children}</label>
    </div>
  )
}

export default NewTchatCheckBox;