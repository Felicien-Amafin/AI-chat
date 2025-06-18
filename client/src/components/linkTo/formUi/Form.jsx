import FormInput from "./FormInput";
import FormBtn from "./FormBtn";

const Form = ({children, form, style}) => {

  return (
    <form 
      className={`${style.form} flex-column`}
    >
      <h2 className={style.title}>{form.title}</h2>
      <div className={`${style.inputs} flex-column`}>
        {form.inputs.map((input)=> <FormInput
          style={style} 
          key={input.name} 
          input={input}
        />)}
      </div>
      <FormBtn 
        style={style}
        text={form.btn_text}
      />
      {children}
    </form>
  )
}

export default Form;