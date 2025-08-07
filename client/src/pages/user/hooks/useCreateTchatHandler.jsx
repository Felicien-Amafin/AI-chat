import { useEffect } from "react";
import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useCreateTchat } from "../../../services/mutations";
import useLogoutUser from "./useLogoutUser";

const useCreateTchatHandler = (dataToSend) => {
    const { mutate, isPending, data, error } = useCreateTchat();

    //Handles tchat creation errors if needed
    const { isForbidden, isUnAuthorized, isServerError, } = useRequestErrorHandler(error);

    useLogoutUser(isUnAuthorized || isForbidden);//Logout user if needed

    const isTchatCreated = data?.status === 201;
    const createdTchat = data?.data.tchat;
    const serverError =  'Erreur interne au serveur. Veuillez Réessayer plus tard.'

    useEffect(() => {
        if(dataToSend) {
            //Sending tchat data to backend to create new tchat in db
            mutate(dataToSend);
        }
    }, [dataToSend, mutate]);

    return { mutate, isPending, isTchatCreated, createdTchat, isServerError, serverError }
}

export default useCreateTchatHandler;
