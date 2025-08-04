import { formNewCategorie } from '../../constant/forms';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import useTchatFormHandler from '../../hooks/useTchatFormHandler';
import useCategorieCreationHandler from '../../hooks/useCategorieCreationHandler';
import { useEffect } from 'react';

const NewCategorieForm = ({style}) => {
  const { 
    isValidationPending, 
    isFormValid,
    formData,
    tchatForm, 
    isValidationClientError, 
    isValidationServerError, 
    validationInputErrorMess, 
    validationInputErrors,
    handleChange,
    handleSubmission 
  } = useTchatFormHandler();//Handles Tchat form's validation and potentials errors

  const { 
    isCreationPending, 
    categorieData,
    isCreationClientError, 
    isCreationServerError,
    creationInputErrorMess, 
    creationInputErrors 
  } = useCategorieCreationHandler(isFormValid, tchatForm);//Handles categories creation and potentials errors
 
  return (
    <form 
      className={`${style} flex-column`}
      onSubmit={handleSubmission}
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