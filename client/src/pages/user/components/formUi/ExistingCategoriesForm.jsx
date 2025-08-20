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
import useAddChatToCategory from '../../hooks/useAddChatToCategory';
import { useEffect, useState } from 'react';
import FormInputErrorMess from '../../../../components/formUi/formInputErrorMess/FormInputErrorMess';

const ExistingCategoriesForm = ({style}) => {
  const navigate = useNavigate();

  const { formData, handleChange } = useForm(); //Handles form's input data
  const [isSelectError, setSelectError] = useState(false);

  const { 
    isCategoriesPending, 
    categories, 
    isCategoriesServerError,
    categoriesServerError
  } = useGetCategoriesHandler();//Gets categories from db for the Select component

  const { 
    mutate, 
    isPending, 
    tchatId,
    isClientError:isChatClientError, 
    isServerError:isChatServerError, 
    formErrors, 
    serverError,
  } = useAddChatToCategory(); 

  const optionList = createSelectList(categories);//Create list for Select component

  const handleSelect = (option) => {
    if(isSelectError) setSelectError(false);
    formData.categorie = option.value;
  }

  const handleSubmission = (e) => {
    e.preventDefault();

    if(!formData.categorie) {
      setSelectError(true);
      return;
    }

    const newFormData = trimAndLowerCase(formData);
    mutate({...newFormData, invalidateKey: `categories-${newFormData.categorie}`});
  }

  useEffect(() => {
    if(tchatId) {
      navigate(`/user/tchat/${tchatId}`, { replace: true });
    }
  }, [navigate, tchatId]);

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
          {isSelectError && <FormInputErrorMess error="Sélectionnez une catégorie"/>} 
          <FormInput
            input={formExistingCategories.input}
            error={formErrors.inputs}
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
        </>
      }
      {isChatClientError && <FormErrorMess error={formErrors.message}/>}
      {isChatServerError && <FormErrorMess error={serverError}/>} 
      {isCategoriesServerError && <FormErrorMess error={categoriesServerError}/>} 
      {!optionList && 
        <p style={{ color: 'white', fontSize: '12px' }}>
          Vous n'avez pas encore de categories
        </p>
      }
      {isCategoriesPending && <Loader size={10}/>}
    </form>
  )
}

export default ExistingCategoriesForm;