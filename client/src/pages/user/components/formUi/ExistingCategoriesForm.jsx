import Select from 'react-select';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import { formExistingCategories } from '../../constant/forms';
import useForm from '../../../../hooks/useForm';
import useTchatFormValidation from '../../hooks/useTchatFormValidation';

const ExistingCategoriesForm = ({style}) => {
  const { formData, handleChange } = useForm();
  const { isPending, isFormValid, isServerError, inputErrorMess, inputErrors, handleSubmission} = useTchatFormValidation();

  const handleSelect = (option) => {
    formData.categorie = option.value;
  }
  
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
        error={inputErrors}
        value={formData[formExistingCategories.input.name] || ''}
        required={true}
        onInputChange={handleChange}
      />
      <FormBtn
        style='whiteBtn button'
        text='Commencer' 
        onClick={null} 
        isPending={isPending}
      />
      {inputErrorMess && <p className='error messAnim'>{inputErrorMess}</p>}
      {(isServerError) && <p className='error messAnim'>Server error</p>} 
    </form>
  )
}

export default ExistingCategoriesForm;