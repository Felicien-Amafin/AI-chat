import { formNewCategorie } from '../../constant/forms';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import useTchatFormValidation from '../../hooks/useTchatFormValidation';
import useForm from '../../../../hooks/useForm';
import { trimAndLowerCase } from '../../../../utils';
import { useValidateTchatForm } from '../../../../services/mutations';
import useFormErrorHandler from '../../../../hooks/useFormInputErrorHandler';
import useErrorHandler from '../../../../hooks/useRequestErrorHandler';
import useLogoutUser from '../../hooks/useLogoutUser';
import { useEffect } from 'react';

const NewCategorieForm = ({style}) => {
  const { formData, handleChange } = useForm();
  const { isPending, mutate, reset, data, error } = useValidateTchatForm();
  const { isClientError, isServerError, isForbidden, isUnAuthorized } = useErrorHandler(error);
  const { inputErrorMess, inputErrors } = useFormErrorHandler(isClientError, error);
  useLogoutUser(isForbidden || isUnAuthorized);

  const handleSubmission = (e) => {
    e.preventDefault();
    const newFormData = trimAndLowerCase(formData);
    reset(); // reset the form from previous mutation
    mutate({...newFormData});
  }
  
  useEffect(() => {
    //if :
    // -invalidate queryKey
    // -data navigate to newTchatpage with new categorie id is param
  })

  return (
    <form 
      className={`${style} flex-column`}
      onSubmit={handleSubmission}
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
        isPending={isPending}
      />
      {inputErrorMess && <p>{inputErrorMess}</p>}
      {(isServerError) && <p>Server error</p>} 
    </form>
  )
}

export default NewCategorieForm;