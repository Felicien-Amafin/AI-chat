import { useEffect } from "react";
import { useDeleteChatMutation } from "../../../services/mutations";
import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import useLogoutUser from "./useLogoutUser";

const useDeleteChat = (closeModal) => {
    const { mutate, isPending, data, error } = useDeleteChatMutation();
    const { isUnAuthorized, isForbidden, isServerError } = useRequestErrorHandler(error);
    useLogoutUser(isUnAuthorized || isForbidden);

    const serverErrorMess = "Impossible de supprimer ce chat. Réessayez ultérieurement."

    useEffect(() => {
        if(data?.status === 200) {
            closeModal(true);
        }
    }, [data?.status, closeModal]);

    return { mutate, isPending, isServerError, serverErrorMess }
}

export default useDeleteChat;