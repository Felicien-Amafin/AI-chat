import FormInput from "../formInput/FormInput";
import FormBtn from "../FormBtn";
import useForm from "../../../hooks/useForm";
import style from './form.module.css';

const Form = ({children, onSubmit, form, reqResult}) => {
  const { handleChange, formData } = useForm();
  const inputErrors = reqResult.error?.response.data.errors;
  const errorMess = reqResult.error?.response.data.message;
  const confirmation = reqResult.data?.data.message;

  return (
    <form 
      className={`${style.form} flex-column`}
      onSubmit={(e)=> { onSubmit(e, formData) }}
    >
      <h2 className={style.title}>{form.title}</h2>
      <div className={`${style.inputs} flex-column`}>
        {form.inputs.map((input)=> <FormInput
          key={input.name} 
          input={input}
          error={inputErrors}
          value={formData[input.name] || ''}
          required={input.is_requied}
          onInputChange={handleChange}
        />)}
      </div>
      <FormBtn 
        style='button wideBtn whiteBtn'
        text={form.btn_text}
        isPending={reqResult?.isPending}
      />
      {confirmation && <p className={`${style.confirmation} messAnim`}>
        {confirmation}
      </p>}
      {errorMess && <p className={`${style.error} error messAnim`}>
        {errorMess}
      </p>}
      {children}
    </form>
  )
}

export default Form;