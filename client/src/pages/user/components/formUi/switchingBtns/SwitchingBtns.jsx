import style from './switchingBtns.module.css';

const SwitchingBtns = ({onSwitch, isSwitching}) => {
  return (
    <div className={style.btns}>
      <button 
        className={isSwitching ? `${style.selected}`: `${style.unSelected}`}
        onClick={()=> onSwitch(true)}
      >
        Nouvelle catégorie
      </button>
      <button 
        className={!isSwitching ? `${style.selected}`: `${style.unSelected}`}
        onClick={()=> onSwitch(false)}
      >
        Catégorie existante
      </button>
    </div>
  )
}

export default SwitchingBtns;