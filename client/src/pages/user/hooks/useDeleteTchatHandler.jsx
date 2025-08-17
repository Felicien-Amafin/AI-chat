import { useEffect } from "react";
import { useDeleteTchat } from "../../../services/mutations";
import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import useLogoutUser from "./useLogoutUser";

const useDeleteTchatHandler = (closeModal) => {
    const { mutate, isPending, data, error } = useDeleteTchat();
    const { isUnAuthorized, isForbidden, isServerError } = useRequestErrorHandler(error);
    useLogoutUser(isUnAuthorized || isForbidden);

    const serverErrorMess = "Impossible de supprimer ce tchat. Réessayez ultérieurement."

    useEffect(() => {
        if(data?.status === 200) {
            closeModal(true);
        }
    }, [data?.status, closeModal]);

    return { mutate, isPending, isServerError, serverErrorMess }
}

export default useDeleteTchatHandler;