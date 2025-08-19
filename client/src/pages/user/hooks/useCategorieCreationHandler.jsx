import { useEffect } from 'react';
import { useCreateCategorie } from '../../../services/mutations';
import useRequestErrorHandler from '../../../hooks/useRequestErrorHandler';
import useFormInputErrorHandler from '../../../hooks/useFormInputErrorHandler';
import useLogoutUser from './useLogoutUser';

const useCategorieCreationHandler = (isActive, formData) => {
    const {
        isPending:isCategorieCreationPending, 
        data:categorieData, 
        error, 
        mutate 
    } = useCreateCategorie();//Creates categorie in db

    const { 
        isClientError:isCategorieClientError, 
        isServerError:isCategorieServerError, 
        isForbidden, 
        isUnAuthorized, 
    } = useRequestErrorHandler(error);
     
    const { 
        inputErrorMess:categorieInputErrorMess, 
        inputErrors:categorieInputErrors 
    } = useFormInputErrorHandler(error);

    useLogoutUser(isForbidden || isUnAuthorized);

    useEffect(() => {
        if(isActive && formData) {//Sends  validated form's data to db conditionally
            mutate(formData);
        }
    }, [isActive, formData, mutate]);

    const isCategorieCreated = categorieData?.status === 201;
    const categorieId = categorieData?.data.categorie.id;

    return {
        isCategorieCreationPending, 
        isCategorieCreated,
        categorieId,
        isCategorieClientError, 
        isCategorieServerError, 
        categorieInputErrorMess,
        categorieInputErrors
    }
}

export default useCategorieCreationHandler;