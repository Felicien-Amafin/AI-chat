import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "./api/auth";

export const useSignUpUser = ()=> {
    return useMutation({
        mutationFn: signUpUser
    });
}