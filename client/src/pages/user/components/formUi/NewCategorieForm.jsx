import { formNewCategorie } from '../../constant/forms';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import FormErrorMess from '../../../../components/formUi/formErrorMess/FormErrorMess';
import useTchatFormHandler from '../../hooks/useTchatFormHandler';
import useCategorieCreationHandler from '../../hooks/useCategorieCreationHandler';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useCreateTchatHandler from '../../hooks/useCreateTchatHandler';
import useNewTchatWorkflow from '../../hooks/useNewTchatWorkflow';

const NewCategorieForm = ({style}) => {
  const { } = useNewTchatWorkflow(); //Create a new tchat

  /* const { 
    isValidationPending, 
    isFormValid,
    formData,
    validatedForm, 
    isValidationClientError, 
    isValidationServerError, 
    validationInputErrorMess, 
    validationInputErrors,
    handleChange,
    handleSubmission 
  } = useTchatFormHandler();//Handles Tchat form's validation and potentials errors

  const { 
    isCategorieCreationPending, 
    isCategorieCreated, 
    categorieId,
    isCategorieClientError, 
    isCategorieServerError, 
    categorieInputErrorMess,
    categorieInputErrors
  } = useCategorieCreationHandler(isFormValid, validatedForm);//Handles categories creation and potentials errors
  
  const dataToSend = useMemo(() => {
    return {
      categorie_id: categorieId, 
      tchat_title: validatedForm?.title
    };

  }, [categorieId, validatedForm]);

  const { 
    isTchatCreationPending, 
    isTchatCreated, 
    createdTchat, 
    isTchatServerError  
  } = useCreateTchatHandler(isCategorieCreated, dataToSend);

  const navigate = useNavigate();

  useEffect(() => {
    if(isTchatCreated) {
      navigate(`/user/tchat/${createdTchat.id}`, { replace: true });

    }
  }, [isTchatCreated, createdTchat, navigate]);
 */
  return (
    <form 
      className={`${style} flex-column`}
      onSubmit={handleSubmission}
    >
      {formNewCategorie.map((input) => 
        <FormInput
          key={input.name}
          input={input}
          error={validationInputErrors || categorieInputErrors}
          value={formData[input.name] || ''}
          required={true}
          onInputChange={handleChange}
        />)
      }
      <FormBtn
        style='whiteBtn button'
        text='Commencer' 
        onClick={null} 
        isPending={isValidationPending || isCategorieCreationPending || isTchatCreationPending}
      />
      {(isValidationClientError || isCategorieClientError) && 
        <FormErrorMess error={validationInputErrorMess || categorieInputErrorMess}/>
      }
      {(isValidationServerError || isCategorieServerError || isTchatServerError) && 
        <FormErrorMess error='Erreur de server'/>
      } 
    </form>
  )
}

export default NewCategorieForm;