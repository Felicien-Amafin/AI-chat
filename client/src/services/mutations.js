import { useMutation } from "@tanstack/react-query";
import { 
    logout, 
    refreshAccessTk, 
    resetPassword, 
    sendResetEmail, 
    signInUser, 
    signUpUser, 
    verifyEmail,
} from "./api/auth";
import { validateTchatForm } from "./api/categories";

//Auth mutation
export const useSignUpUser = ()=> {
    return useMutation({
        mutationFn: signUpUser
    });
}

export const useSignInUser = ()=> {
    return useMutation({
        mutationFn: signInUser
    });
}

export const useEmailVerification = ()=> {
    return useMutation({
        mutationFn: verifyEmail
    });
}

export const useSendResetEmail = ()=> {
    return useMutation({
        mutationFn: sendResetEmail
    });
}

export const useResetPassword = ()=> {
    return useMutation({
        mutationFn: resetPassword
    });
}

export const useFetchLogout = ()=> {
    return useMutation({
        mutationFn: logout
    });
}

export const useRefreshAccessTk = ()=> {
   return useMutation({
      mutationFn: refreshAccessTk
   });
}

//Others mutation
export const useValidateTchatForm = ()=> {
    return useMutation({
        mutationFn: validateTchatForm
    });
}

