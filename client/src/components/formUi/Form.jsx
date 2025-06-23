import FormInput from "./FormInput";
import FormBtn from "./FormBtn";
import useForm from "../../hooks/useForm";

const Form = ({children, onSubmit, form, style, reqResult}) => {
  const { handleChange, formData } = useForm();
  const inputErrors = reqResult?.error?.response.data.errors;
  const errorMess = reqResult?.error?.response.data.message;
  const confirmation = reqResult?.data?.data.message;
  console.log(reqResult)
  return (
    <form 
      className={`${style.form} flex-column`}
      onSubmit={(e)=> { onSubmit(e, formData) }}
    >
      <h2 className={style.title}>{form.title}</h2>
      <div className={`${style.inputs} flex-column`}>
        {form.inputs.map((input)=> <FormInput
          style={style} 
          key={input.name} 
          input={input}
          errors={inputErrors}
          value={formData[input.name] || ''}
          required={input.is_requied}
          onInputChange={handleChange}
        />)}
      </div>
      <FormBtn 
        style={style}
        text={form.btn_text}
        isPending={reqResult?.isPending}
      />
      {confirmation && <p className={`${style.confirmation} ${style.messAnim}`}>
        {confirmation}
      </p>}
      {errorMess && <p className={`${style.errorMess} ${style.error} ${style.messAnim}`}>
        {errorMess}
      </p>}
      {children}
    </form>
  )
}

export default Form;