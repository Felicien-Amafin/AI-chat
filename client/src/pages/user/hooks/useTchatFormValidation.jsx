import { useValidateTchatForm } from "../../../services/mutations";
import useFormInputErrorHandler from "../../../hooks/useFormInputErrorHandler";
import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import useLogoutUser from "./useLogoutUser";
import { trimAndLowerCase } from "../../../utils";

const useTchatFormValidation = () => {
    const { isPending, mutate, reset, data, error } = useValidateTchatForm();
    const { isServerError, isForbidden, isUnAuthorized } = useRequestErrorHandler(error);
    const { inputErrorMess, inputErrors } = useFormInputErrorHandler(error);
    useLogoutUser(isForbidden || isUnAuthorized);

    const isFormValid = data?.status === 200;

    const handleSubmission = (e, formData) => {
        e.preventDefault();
        const newFormData = trimAndLowerCase(formData);
        reset(); // reset the form from previous mutation
        mutate({...newFormData});
    };

    return { 
       isPending,
       isFormValid,
       isServerError,
       inputErrorMess,
       inputErrors,
       handleSubmission
    }
}

export default useTchatFormValidation;