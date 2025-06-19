
const FormBtn = ({style, text, onClick}) => {

  return (
    <button 
      onClick={onClick ? ()=> onClick() : null}
      className={`${style.btn} button`}
    >
    {text}
    </button>
  )
}

export default FormBtn;