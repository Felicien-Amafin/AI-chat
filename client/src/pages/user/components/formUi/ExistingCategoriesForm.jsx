import Select from 'react-select';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import { formExistingCategories } from '../../constant/forms';
import useTchatFormHandler from '../../hooks/useTchatFormHandler';
import useGetCategoriesHandler from '../../hooks/useGetCategoriesHandler';
import useCreateTchatHandler from '../../hooks/useCreateTchatHandler';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { createSelectList, getCategorieInArray } from '../../../../utils';
import Loader from '../../../../components/others/Loader';
import FormErrorMess from '../../../../components/formUi/formErrorMess/FormErrorMess';

const ExistingCategoriesForm = ({style}) => {
  const { 
    isCategoriesPending, 
    categories, 
    isCategoriesServerError 
  } = useGetCategoriesHandler();//Gets categories from db for the Select component

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

  //Using getCategorieInArray to retrieve selected categorie's datas
  const categorie = getCategorieInArray(validatedForm?.categorie, categories);

  const dataToSend = useMemo(() => {
    if (categorie) {
      return {
        categorie_id: categorie[0]?.id,
        tchat_title: validatedForm?.title
      };
    }
    return null;
  }, [categorie, validatedForm]);
  
  const { 
    isCreationPending, 
    isTchatCreated, 
    createdTchat, 
    isCreationServerError  
  } = useCreateTchatHandler(isFormValid, dataToSend);

  const navigate = useNavigate();

  useEffect(() => {
    if(isTchatCreated) {
      navigate(`/user/tchat/${createdTchat.id}`, { replace: true });

    }
  }, [isTchatCreated, createdTchat, navigate]);

  const serverError =  'Erreur interne au serveur. Veuillez Réessayer plus tard.';

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
            isPending={isValidationPending || isCategoriesPending || isCreationPending}
          />
        </>
      }
      {!optionList && 
        <p style={{ color: 'white', fontSize: '12px' }}>
          Vous n'avez pas encore de categories
        </p>
      }
      {isValidationClientError  && <FormErrorMess error={validationInputErrorMess}/>}
      {(isValidationServerError || isCategoriesServerError || isCreationServerError) && 
        <FormErrorMess error={serverError}/>
      } 
      {isCategoriesPending && <Loader size={10}/>}
    </form>
  )
}

export default ExistingCategoriesForm;