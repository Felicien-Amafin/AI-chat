import { useValidateTchatForm } from "../../../services/mutations";
import useFormInputErrorHandler from "../../../hooks/useFormInputErrorHandler";
import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import useLogoutUser from "./useLogoutUser";
import { trimAndLowerCase } from "../../../utils";

const useTchatFormValidation = () => {
    const { 
        isPending:isValidationPending, 
        mutate,
        data, 
        error 
    } = useValidateTchatForm();

    const { 
        isClientError:isValidationClientError, 
        isServerError:isValidationServerError, 
        isForbidden, 
        isUnAuthorized 
    } = useRequestErrorHandler(error);

    const { 
        inputErrorMess:validationInputErrorMess, 
        inputErrors:validationInputErrors 
    } = useFormInputErrorHandler(error);

    useLogoutUser(isForbidden || isUnAuthorized);

    const isFormValid = data?.status === 200;
    const tchatForm = data?.data.form;

    const handleSubmission = (e, formData) => {
        e.preventDefault();
        const newFormData = trimAndLowerCase(formData);
        mutate({...newFormData});
    };

    return { 
       isValidationPending,
       isFormValid,
       tchatForm,
       isValidationClientError,
       isValidationServerError,
       validationInputErrorMess,
       validationInputErrors,
       handleSubmission
    }
}

export default useTchatFormValidation;