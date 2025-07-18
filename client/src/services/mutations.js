import { useMutation } from "@tanstack/react-query";
import { logout, resetPassword, sendResetEmail, signInUser, signUpUser, verifyEmail } from "./api/auth";

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

export const useLogout= ()=> {
    return useMutation({
        mutationFn: logout
    });
}