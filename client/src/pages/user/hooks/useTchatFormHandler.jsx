import { useValidateTchatForm } from "../../../services/mutations";
import useFormInputErrorHandler from "../../../hooks/useFormInputErrorHandler";
import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import useLogoutUser from "./useLogoutUser";
import useForm from "../../../hooks/useForm";
import { trimAndLowerCase } from "../../../utils";
import { formExistingCategories } from "../constant/forms";

const useTchatFormHandler = () => {
    const { formData, handleChange } = useForm(); //Handles form's input data

    const handleSelect = (option) => {
        formData.categorie = option.value; //Sets selected value in form
    }

    const handleSubmission = (e) => {//Submits the form 
        e.preventDefault();
        const newFormData = trimAndLowerCase(formData);
        mutate({...newFormData});
    };

    const { 
        isPending:isValidationPending, 
        mutate,
        data, 
        error 
    } = useValidateTchatForm();//Sends tchat's form to db for validation using handleSubmission func

    const { 
        isClientError:isValidationClientError, 
        isServerError:isValidationServerError, 
        isForbidden, 
        isUnAuthorized 
    } = useRequestErrorHandler(error);//Handles request's  potential errors

    const { 
        inputErrorMess:validationInputErrorMess, 
        inputErrors:validationInputErrors 
    } = useFormInputErrorHandler(error);

    useLogoutUser(isForbidden || isUnAuthorized);//Logout user if needed

    const formValue = formData[formExistingCategories.input.name] || '';
    const isFormValid = data?.status === 200;
    const tchatForm = data?.data.form;//Gets form's data returned from useValidateTchatForm

    return { //Returns values to for UI to display
       isValidationPending,
       formValue,
       isFormValid,
       tchatForm,
       isValidationClientError,
       isValidationServerError,
       validationInputErrorMess,
       validationInputErrors,
       handleChange,
       handleSelect,
       handleSubmission
    }
}

export default useTchatFormHandler;