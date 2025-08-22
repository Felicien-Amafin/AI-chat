import { useEffect } from "react";
import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useDeleteCategoryMutation } from "../../../services/mutations";
import useLogoutUser from "./useLogoutUser";
import { useNavigate } from "react-router-dom";

const useDeleteCategory = (closeModal) => {
    const { mutate, isPending:isDeletionPending, data, error } = useDeleteCategoryMutation();
    const { isForbidden, isUnAuthorized, isServerError:isDeletionServerError } = useRequestErrorHandler(error);
    useLogoutUser(isForbidden || isUnAuthorized);

    const deletionServerErrorMess = "Impossible de supprimer la catégorie. Réessayez ultérieurement."

    const navigate = useNavigate();

    useEffect(() => {
        if(data?.status === 200) {
            closeModal(true)
            navigate('/user');
        }

    },[data?.status, closeModal, navigate]);

    return { mutate, isDeletionPending, isDeletionServerError, deletionServerErrorMess }
}

export default useDeleteCategory;