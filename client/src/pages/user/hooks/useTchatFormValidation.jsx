import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import useErrorHandler from "./useErrorHandler";
import useFormErrorHandler from "../../../hooks/useFormErrorHandler";
import { useValidateTchatForm } from "../../../services/mutations";
import useLogout from "./useLogoutUser";
import { setAccessToken } from "../../../store/authSlice";
import { trimAndLowerCase } from "../../../utils";

const useTchatFormValidation = (formData) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const { 
        isPending:isPendingFormValidation, //returned
        data:validationData, 
        error:validationError,
        reset:resetValidation, //returned
        mutate:mutateForm // returned
    } = useValidateTchatForm();

    const { 
        isClientError,
        isUnAuthorized:isValidationUnAuthorized, 
        isServerError:isValidationServerError //returned
    } = useErrorHandler(validationError);

   /*  const { inputErrors, inputErrorMess } = useFormErrorHandler(isClientError, validationError); */
    
    const { 
        isFetchingAccessTk, 
        isAccessTkUnAuthorized, 
        isAccesTkServerError, 
        accessTkData, 
        accessTkKey 
    } = useRefreshAccessTk(isValidationUnAuthorized);
    
    /* useLogout(isAccessTkUnAuthorized);

    const isFormValidated = validationData?.status === 200; */
/* 
    useEffect(() => {
        if(accessTkData) {
            console.log(accessTkData)
            //Storing new accessToken
            dispatch(setAccessToken(accessTkData.data.accessToken));
            queryClient.removeQueries({ accessTkKey, exact: true});

            //Reexecuting useValidateTchatForm request
            const newFormData = trimAndLowerCase(formData);
            resetValidation();
            mutateForm({...newFormData});
        }
    }, [accessTkData, accessTkKey, formData, resetValidation, mutateForm, dispatch, queryClient]); */

    return { 
        isPendingFormValidation,
       /*  isFetchingAccessTk,
        isFormValidated,
        inputErrors,
        inputErrorMess,
        isValidationServerError,
        isAccesTkServerError, */
        resetValidation, 
        mutateForm
    }
}

export default useTchatFormValidation;