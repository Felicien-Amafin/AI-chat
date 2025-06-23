import Loader from "../orthers/Loader";

const FormBtn = ({style, text, onClick, isPending}) => {

  return (
    <button 
      onClick={onClick ? ()=> onClick() : null}
      className={`${style.btn} button`}
      disabled={isPending ? true : false}
    >
      {isPending && <Loader size={25}/>}
      {!isPending && text}
    </button>
  )
}

export default FormBtn;