import Select from 'react-select';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import { formExistingCategories } from '../../constant/forms';
import useGetCategoriesHandler from '../../hooks/useGetCategoriesHandler';
import { useNavigate } from 'react-router-dom';
import { createSelectList, trimAndLowerCase } from '../../../../utils';
import Loader from '../../../../components/others/Loader';
import FormErrorMess from '../../../../components/formUi/formErrorMess/FormErrorMess';
import useForm from '../../../../hooks/useForm';

const ExistingCategoriesForm = ({style}) => {
  const navigate = useNavigate();

  const { formData, handleChange } = useForm(); //Handles form's input data

  const { 
    isCategoriesPending, 
    categories, 
    isCategoriesServerError,
    categoriesServerError
  } = useGetCategoriesHandler();//Gets categories from db for the Select component

  const optionList = createSelectList(categories);//Create list for Select component

  
  const handleSelect = (option) => {
    formData.categorie = option.value;
  }

  const handleSubmission = (e) => {
    e.preventDefault();
    const newFormData = trimAndLowerCase(formData);
    /* mutate({...newFormData}); */
  }

  return (
    <form 
      className={`${style} flex-column`}
      onSubmit={handleSubmission}
    >
      {optionList &&
        <> 
          <Select 
            styles={formExistingCategories.select.styles}
            options={optionList}
            placeholder='Rechercher une catégorie'
            onChange={handleSelect}
          />
          <FormInput
            input={formExistingCategories.input}
           /*  error={validationInputErrors} */
            value={formData[formExistingCategories.input.name] || ''}
            required={true}
            onInputChange={handleChange}
          />
        
          <FormBtn
            style='whiteBtn button'
            text='Commencer' 
            onClick={null} 
           /*  isPending={isValidationPending || isCategoriesPending || isCreationPending} */
          />
        </>
      }
      {!optionList && 
        <p style={{ color: 'white', fontSize: '12px' }}>
          Vous n'avez pas encore de categories
        </p>
      }
      {/* {isValidationClientError  && <FormErrorMess error={validationInputErrorMess}/>} */}
      {isCategoriesServerError && <FormErrorMess error={categoriesServerError}/>} 
      {isCategoriesPending && <Loader size={10}/>}
    </form>
  )
}

export default ExistingCategoriesForm;