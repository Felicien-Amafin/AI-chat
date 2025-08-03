import { useEffect } from 'react';
import { useCreateCategorie } from '../../../services/mutations';
import useRequestErrorHandler from '../../../hooks/useRequestErrorHandler';
import useFormInputErrorHandler from '../../../hooks/useFormInputErrorHandler';
import useLogoutUser from './useLogoutUser';

const useHandleCategorieCreation = (isActive, formData) => {
    const {
        isPending:isCreationPending, 
        data:categorieData, 
        error, 
        mutate 
    } = useCreateCategorie();

    const { 
        isClientError:isCreationClientError, 
        isServerError:isCreationServerError, 
        isForbidden, 
        isUnAuthorized, 
    } = useRequestErrorHandler(error);
     
    const { 
        inputErrorMess:creationInputErrorMess, 
        inputErrors:creationInputErrors 
    } = useFormInputErrorHandler(error);

    useLogoutUser(isForbidden || isUnAuthorized);

    useEffect(() => {
        if(isActive && formData) {
            console.log(formData)
            mutate(formData);
        }
    }, [isActive, formData, mutate]);

    return { 
        isCreationPending, 
        categorieData, 
        isCreationClientError, 
        isCreationServerError, 
        creationInputErrorMess,
        creationInputErrors
    }
}

export default useHandleCategorieCreation;