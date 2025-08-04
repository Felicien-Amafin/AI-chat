import Select from 'react-select';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import { formExistingCategories } from '../../constant/forms';
import useTchatFormHandler from '../../hooks/useTchatFormHandler';
import useGetCategories from '../../hooks/useGetCategories';
import useCreateSelectList from '../../hooks/useCreateSelectList';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCategorieInArray } from '../../../../utils';
import Loader from '../../../../components/others/Loader';

const ExistingCategoriesForm = ({style}) => {
  const { 
    isPending:isCategoriesPending, 
    categories, 
    isCategoriesServerError 
  } = useGetCategories();//Gets categories from db

  const { listOptions } = useCreateSelectList(categories);//Create list for Select component

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
    handleSubmission //Triggers form's submission
  } = useTchatFormHandler();//Handles Tchat form's validation and errors

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
      {listOptions && <Select 
        styles={formExistingCategories.select.styles}
        options={listOptions}
        placeholder='Rechercher une catégorie'
        onChange={handleSelect}
      />}
      {!listOptions && <Loader size={10}/>}
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
      {isValidationClientError  && 
        <p className='error messAnim'>{validationInputErrorMess}</p>
      }
      {(isValidationServerError || isCategoriesServerError) && 
        <p className='error messAnim'>Server error</p>
      } 
    </form>
  )
}

export default ExistingCategoriesForm;