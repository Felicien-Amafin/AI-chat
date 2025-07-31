import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import useErrorHandler from "../../../hooks/useRequestErrorHandler";
import useFormErrorHandler from "../../../hooks/useFormInputErrorHandler";
import { useValidateTchatForm } from "../../../services/mutations";
import useLogout from "./useLogoutUser";
import { setAccessToken } from "../../../store/authSlice";
import { trimAndLowerCase } from "../../../utils";

const useTchatFormValidation = () => {
    const { mutate } = useValidateTchatForm();

    return { 
       
    }
}

export default useTchatFormValidation;