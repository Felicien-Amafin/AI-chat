import { formNewCategorie } from '../../constant/forms';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import useForm from '../../../../hooks/useForm';
import useTchatFormValidation from '../../hooks/useTchatFormValidation';
import useHandleCategorieCreation from '../../hooks/useHandleCategorieCreation';
import { useEffect } from 'react';

const NewCategorieForm = ({style}) => {
  const { formData, handleChange } = useForm();

  const { 
    isValidationPending, 
    isFormValid, 
    tchatForm, 
    isValidationClientError, 
    isValidationServerError, 
    validationInputErrorMess, 
    validationInputErrors, 
    handleSubmission 
  } = useTchatFormValidation();

  const { 
    isCreationPending, 
    categorieData,
    isCreationClientError, 
    isCreationServerError,
    creationInputErrorMess, 
    creationInputErrors 
  } = useHandleCategorieCreation(isFormValid, tchatForm);

  return (
    <form 
      className={`${style} flex-column`}
      onSubmit={(e) => handleSubmission(e, formData)}
    >
      {formNewCategorie.map((input) => 
        <FormInput
          key={input.name}
          input={input}
          error={validationInputErrors || creationInputErrors}
          value={formData[input.name] || ''}
          required={true}
          onInputChange={handleChange}
        />)
      }
      <FormBtn
        style='whiteBtn button'
        text='Commencer' 
        onClick={null} 
        isPending={isValidationPending || isCreationPending}
      />
      {(isValidationClientError || isCreationClientError) && 
        <p className='error messAnim'>{validationInputErrorMess || creationInputErrorMess}</p>
      }
      {(isValidationServerError || isCreationServerError) && 
        <p className='error messAnim'>Server error</p>
      } 
    </form>
  )
}

export default NewCategorieForm;