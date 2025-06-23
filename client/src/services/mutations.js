import { useMutation } from "@tanstack/react-query";
import { signUpUser, verifyEmail } from "./api/auth";

export const useSignUpUser = ()=> {
    return useMutation({
        mutationFn: signUpUser
    });
}

export const useEmailVerification = ()=> {
    return useMutation({
        mutationFn: verifyEmail
    });
}