import Loader from "../others/Loader";

const FormBtn = ({style, text, onClick, isPending}) => {
  const handleClick = (e)=> {
    e.preventDefault();
    onClick();
  }

  return (
    <button 
      onClick={onClick ? handleClick : null}
      className={style}
      disabled={isPending ? true : false}
    >
      {isPending && <Loader size={25}/>}
      {!isPending && text}
    </button>
  )
}

export default FormBtn;