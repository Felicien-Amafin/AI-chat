import { formNewCategorie } from '../../constant/forms';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import useTchatFormValidation from '../../hooks/useTchatFormValidation';
import useForm from '../../../../hooks/useForm';
import { trimAndLowerCase } from '../../../../utils';

const NewCategorieForm = ({style}) => {
  const { formData, handleChange } = useForm();

  const { 
    isPendingFormValidation,
   /*  isFetchingAccessTk,
    isFormValidated,
    inputErrors,
    inputErrorMess,
    isValidationServerError,
    isAccesTkServerError, */
    resetValidation, 
    mutateForm
  } = useTchatFormValidation(formData);

  const handleSubmission = (e) => {
    e.preventDefault();
    const newFormData = trimAndLowerCase(formData);
   /*  resetValidation(); //Clears data from a previous mutation */
    mutateForm({...newFormData});
  }
  
 /*  isFormValidated ? console.log('Form has been validated!') : null; */
  
  return (
    <form 
      className={`${style} flex-column`}
      onSubmit={handleSubmission}
    >
      {formNewCategorie.map((input) => 
        <FormInput
          key={input.name}
          input={input}
          /* error={inputErrors} */
          value={formData[input.name] || ''}
          required={true}
          onInputChange={handleChange}
        />)
      }
      <FormBtn
        style='whiteBtn button'
        text='Commencer' 
        onClick={null} 
        /* isPending={isPendingFormValidation || isFetchingAccessTk} */
      />
     {/*  {inputErrorMess && <p>{inputErrorMess}</p>}
      {(isValidationServerError || isAccesTkServerError) && <p>Server error</p>}  */}
    </form>
  )
}

export default NewCategorieForm;