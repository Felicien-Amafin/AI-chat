import Select from 'react-select';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import { formExistingCategories } from '../../constant/forms';
import useTchatFormHandler from '../../hooks/useTchatFormHandler';
import useGetCategoriesHandler from '../../hooks/useGetCategoriesHandler';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { createSelectList, getCategorieInArray } from '../../../../utils';
import Loader from '../../../../components/others/Loader';

const ExistingCategoriesForm = ({style}) => {
  const { 
    isCategoriesPending, 
    categories, 
    isCategoriesServerError 
  } = useGetCategoriesHandler();//Gets categories from db

  const optionList = createSelectList(categories);//Create list for Select component

  const { 
    isValidationPending,
    formData,
    isFormValid,
    validatedForm,
    isValidationClientError,
    isValidationServerError,
    validationInputErrorMess,
    validationInputErrors,
    handleChange,
    handleSelect,
    handleSubmission 
  } = useTchatFormHandler();

  const navigate = useNavigate();

  useEffect(() => {
    if(isFormValid) {
      //Gathering some usefull data before navigating to /user/new-tchat
      const categorie = getCategorieInArray(validatedForm?.categorie, categories);

      const dataToSend = { 
        categorie_id: categorie[0].id, 
        categorie_name: categorie[0].name,
        tchat_title: validatedForm.title
      };

      navigate('/user/new-tchat', { state: dataToSend, replace: true });
    }
  },[categories, validatedForm?.categorie, validatedForm?.title, isFormValid, navigate])
  
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
            error={validationInputErrors}
            value={formData[formExistingCategories.input.name] || ''}
            required={true}
            onInputChange={handleChange}
          />
        
          <FormBtn
            style='whiteBtn button'
            text='Commencer' 
            onClick={null} 
            isPending={isValidationPending || isCategoriesPending}
          />
        </>
      }
      {!optionList && 
        <p style={{ color: 'white', fontSize: '12px' }}>
          Vous n'avez pas encore de categories
        </p>
      }
      {isValidationClientError  && 
        <p className='error messAnim'>{validationInputErrorMess}</p>
      }
      {(isValidationServerError || isCategoriesServerError) && 
        <p className='error messAnim'>Server error</p>
      } 
      {isCategoriesPending && <Loader size={10}/>}
    </form>
  )
}

export default ExistingCategoriesForm;