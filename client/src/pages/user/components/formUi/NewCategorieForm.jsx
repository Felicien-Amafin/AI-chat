import { formNewCategorie } from '../../constant/forms';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import useForm from '../../../../hooks/useForm';
import useTchatFormValidation from '../../hooks/useTchatFormValidation';
import { useEffect } from 'react';

const NewCategorieForm = ({style}) => {
  const { formData, handleChange } = useForm();

  const { 
    isValidationPending, isFormValid, data, isClientError, 
    isValidationServerError, inputErrorMess, inputErrors, handleSubmission 
  } = useTchatFormValidation();

  

  return (
    <form 
      className={`${style} flex-column`}
      onSubmit={(e) => handleSubmission(e, formData)}
    >
      {formNewCategorie.map((input) => 
        <FormInput
          key={input.name}
          input={input}
          error={inputErrors}
          value={formData[input.name] || ''}
          required={true}
          onInputChange={handleChange}
        />)
      }
      <FormBtn
        style='whiteBtn button'
        text='Commencer' 
        onClick={null} 
        isPending={isValidationPending}
      />
      {isClientError && <p className='error messAnim'>{inputErrorMess}</p>}
      {(isValidationServerError) && <p className='error messAnim'>Server error</p>} 
    </form>
  )
}

export default NewCategorieForm;