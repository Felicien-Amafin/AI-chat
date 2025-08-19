import { formNewCategorie } from '../../constant/forms';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import FormErrorMess from '../../../../components/formUi/formErrorMess/FormErrorMess';
import useForm from '../../../../hooks/useForm';
import useCreateTchatInNewCategorie from '../../hooks/useCreateTchatInNewCategorie';
import { trimAndLowerCase } from '../../../../utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewCategorieForm = ({style}) => {
  const { formData, handleChange } = useForm(); //Handles form's input data
  const { 
    mutate, 
    isPending, 
    tchatId,
    isClientError, 
    isServerError, 
    serverError,
    formErrors 
  } = useCreateTchatInNewCategorie();

  const handleSubmission = (e) => {//Submits the form 
    e.preventDefault();
    const newFormData = trimAndLowerCase(formData);
    mutate({...newFormData});
  };

  const navigate = useNavigate();

  useEffect(() => {
    if(tchatId) {
      navigate(`/user/tchat/${tchatId}`, { replace: true });
    }
  }, [navigate, tchatId])

  return (
    <form 
      className={`${style} flex-column`}
      onSubmit={handleSubmission}
    >
      {formNewCategorie.map((input) => 
        <FormInput
          key={input.name}
          input={input}
          error={formErrors.inputs}
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
      {isClientError && <FormErrorMess error={formErrors.message}/>
      }
      {isServerError && <FormErrorMess error={serverError}/>} 
    </form>
  )
}

export default NewCategorieForm;