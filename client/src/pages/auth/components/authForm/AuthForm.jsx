import FormInput from "../../../../components/formUi/formInput/FormInput";
import FormBtn from "../../../../components/formUi/FormBtn";
import useForm from "../../../../hooks/useForm";
import style from './authForm.module.css';
import useFormInputErrorHandler from "../../../../hooks/useFormInputErrorHandler";
import useRequestErrorHandler from "../../../../hooks/useRequestErrorHandler";

const AuthForm = ({children, onSubmit, form, request}) => {
  const { handleChange, formData } = useForm();
  const { isServerError } = useRequestErrorHandler(request.error);
  const { inputErrors, inputErrorMess } = useFormInputErrorHandler(request.error); 
  const confirmationMess = request.data?.data?.message;

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
        isPending={request?.isPending}
      />
      {confirmationMess && <p className={`${style.confirmation} messAnim`}>
        {confirmationMess}
      </p>}
      {inputErrorMess && <p className={`${style.error} error messAnim`}>
        {inputErrorMess}
      </p>}
      {isServerError && <p className={`${style.error} error messAnim`}>
        Erreur de serveur. Réessayez ultérieurement
      </p>}
      {children}
    </form>
  )
}

export default AuthForm;