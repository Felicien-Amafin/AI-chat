import { useMutation, useQueryClient } from "@tanstack/react-query";
import { 
    logout, 
    refreshAccessTk, 
    resetPassword, 
    sendResetEmail, 
    signInUser, 
    signUpUser, 
    verifyEmail,
} from "./api/auth";
import { createCategorie, deleteCategorie } from "./api/categorie";
import { createTchat, deleteTchat, sendTchatMessage, validateTchatForm } from "./api/tchat";

//Auth mutation
export const useSignUpUser = () => {
    return useMutation({
        mutationFn: signUpUser
    });
}

export const useSignInUser = () => {
    return useMutation({
        mutationFn: signInUser
    });
}

export const useEmailVerification = () => {
    return useMutation({
        mutationFn: verifyEmail
    });
}

export const useSendResetEmail = () => {
    return useMutation({
        mutationFn: sendResetEmail
    });
}

export const useResetPassword = () => {
    return useMutation({
        mutationFn: resetPassword
    });
}

export const useLogout = ()=> {
    return useMutation({
        mutationFn: logout
    });
}

export const useRefreshAccessTk = () => {
   return useMutation({
      mutationFn: refreshAccessTk
   });
}

//Others mutations
/* export const useValidateTchatForm = () => {
    return useMutation({
        mutationFn: validateTchatForm
    });
} */

export const useCreateCategorie = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createCategorie,
        onSuccess: () => {
            //invalidate quey key to get updated data
            queryClient.invalidateQueries({ queryKey: ['categories'] }); 
        },
    });
}

export const useCreateTchat = () => {
    return useMutation({
        mutationFn: createTchat,
    });
}

export const useSendTchatMessage = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: sendTchatMessage,
        onSuccess: () => {
            //invalidate quey key to get updated tchat messages
            queryClient.invalidateQueries({ queryKey: ['tchat-messages'] }); 
        },
    })
}

export const useDeleteTchat = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTchat,
        onSuccess: (_, variables) => {
            //invalidate quey key to get updated tchat list
            if (variables?.invalidateKey) {
                queryClient.invalidateQueries({ queryKey: [variables.invalidateKey] });
            } 
        },
    })
}

export const useDeleteCategorie = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteCategorie,
        onSuccess: () => {
            //invalidate query key to get updated categorie list
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        },
    })
}