import Select from 'react-select';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import { formExistingCategories } from '../../constant/forms';
import useForm from '../../../../hooks/useForm';
import useTchatFormValidation from '../../hooks/useTchatFormValidation';

const ExistingCategoriesForm = ({style}) => {
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

  const handleSelect = (option) => {
    formData.categorie = option.value;
  }
  
  console.log(tchatForm)
  return (
    <form 
      className={`${style} flex-column`}
      onSubmit={(e) => handleSubmission(e, formData)}
    >
      <Select 
        styles={formExistingCategories.select.styles}
        options={formExistingCategories.select.options}
        placeholder='Rechercher une catégorie'
        onChange={handleSelect}
      />
      <FormInput
        input={formExistingCategories.input}
        error={validationInputErrors}
        value={formData[formExistingCategories.input.name] || ''}
        required={true}
        onInputChange={handleChange}
      />
      <FormBtn
        style='whiteBtn button'
        text='Commencer' 
        onClick={null} 
        isPending={isValidationPending}
      />
      {(isValidationClientError /* || isCreationClientError */) && 
        <p className='error messAnim'>{validationInputErrorMess /* || creationInputErrorMess */}</p>
      }
      {(isValidationServerError /* || isCreationServerError */) && 
        <p className='error messAnim'>Server error</p>
      } 
    </form>
  )
}

export default ExistingCategoriesForm;