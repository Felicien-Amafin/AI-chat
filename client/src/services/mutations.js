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
import { addChatToCategory, createCategoryWithChat, deleteCategory } from "./api/category";
import { deleteChat, sendChatMessage } from "./api/chat";

//Auth mutation
export const useSignUpUserMutation = () => {
    return useMutation({
        mutationFn: signUpUser
    });
}

export const useSignInUserMutation = () => {
    return useMutation({
        mutationFn: signInUser
    });
}

export const useEmailVerificationMutation = () => {
    return useMutation({
        mutationFn: verifyEmail
    });
}

export const useSendResetEmailMutation = () => {
    return useMutation({
        mutationFn: sendResetEmail
    });
}

export const useResetPasswordMutation = () => {
    return useMutation({
        mutationFn: resetPassword
    });
}

export const useLogoutMutation = ()=> {
    return useMutation({
        mutationFn: logout
    });
}

export const useRefreshAccessTkMutation = () => {
   return useMutation({
      mutationFn: refreshAccessTk
   });
}

//Others mutations
export const useCreateCategoryWithChatMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createCategoryWithChat,
        onSuccess: () => {
            //invalidate quey key to get updated data
            queryClient.invalidateQueries({ queryKey: ['categories'] }); 
        },
    });
}

export const useAddChatToCategoryMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addChatToCategory,
        onSuccess: (_, variables) => {
            //invalidate quey key to get updated chat list
            if (variables?.invalidateKey) {
                queryClient.invalidateQueries({ queryKey: [variables.invalidateKey] });
            } 
        },
    });
}

export const useSendChatMessageMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: sendChatMessage,
        onSuccess: () => {
            //invalidate quey key to get updated chat messages
            queryClient.invalidateQueries({ queryKey: ['chat-messages'] }); 
        },
    })
}

export const useDeleteChatMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteChat,
        onSuccess: (_, variables) => {
            //invalidate quey key to get updated chat list
            if (variables?.invalidateKey) {
                queryClient.invalidateQueries({ queryKey: [variables.invalidateKey] });
            } 
        },
    })
}

export const useDeleteCategoryMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            //invalidate query key to get updated category list
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        },
    })
}
