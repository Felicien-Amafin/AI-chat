import { useEffect } from 'react';
import { useCreateCategorie } from '../../../services/mutations';
import useRequestErrorHandler from '../../../hooks/useRequestErrorHandler';
import useFormInputErrorHandler from '../../../hooks/useFormInputErrorHandler';
import useLogoutUser from './useLogoutUser';

const useCategorieCreationHandler = (isActive, formData) => {
    const {
        isPending:isCreationPending, 
        data:categorieData, 
        error, 
        mutate 
    } = useCreateCategorie();//Creates categorie in db

    const { 
        isClientError:isCreationClientError, 
        isServerError:isCreationServerError, 
        isForbidden, 
        isUnAuthorized, 
    } = useRequestErrorHandler(error);//Handles potential requests errors
     
    const { 
        inputErrorMess:creationInputErrorMess, 
        inputErrors:creationInputErrors 
    } = useFormInputErrorHandler(error);//Handles potential form's inputs errors

    useLogoutUser(isForbidden || isUnAuthorized);//Logout user if needed

    useEffect(() => {
        if(isActive && formData) {//Sends form's data to db conditionally
            mutate(formData);
        }
    }, [isActive, formData, mutate]);

    return {//Returns values to UI to display
        isCreationPending, 
        categorieData, 
        isCreationClientError, 
        isCreationServerError, 
        creationInputErrorMess,
        creationInputErrors
    }
}

export default useCategorieCreationHandler;