/* import { useEffect } from "react";
import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useCreateTchat } from "../../../services/mutations";
import useLogoutUser from "./useLogoutUser";

const useCreateTchatHandler = (isActive, dataToSend) => {
    const { 
        mutate, 
        isPending:isTchatCreationPending, 
        data, 
        error 
    } = useCreateTchat();

    //Handles tchat creation errors if needed
    const { 
        isForbidden:isCreationForbidden, 
        isUnAuthorized:isCreationUnAuthorized, 
        isServerError:isTchatServerError, 
    } = useRequestErrorHandler(error);

    useLogoutUser(isCreationUnAuthorized || isCreationForbidden);//Logout user if needed

    const isTchatCreated = data?.status === 201;
    const createdTchat = data?.data.tchat;

    useEffect(() => {
        if(isActive && dataToSend?.categorie_id) {
            console.log(console.log('Create tchat'))
            //Sending tchat data to backend to create new tchat in db
            mutate(dataToSend);
        }
    },[isActive, dataToSend, mutate]);

    return { 
        isTchatCreationPending, 
        isTchatCreated, 
        createdTchat, 
        isTchatServerError 
    }
}

export default useCreateTchatHandler;
 */