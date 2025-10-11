import { useEffect } from "react";
import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useLaunchChatSuggestionMutation } from "../../../services/mutations";
import { useNavigate } from "react-router-dom";
import { resetChat, setIsSuggestedQuestion, setUserQuestion } from "../../../store/chatSlice";
import { useDispatch } from "react-redux";

const useLaunchChatSuggestion = (suggestion) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mutate, isPending, data, error } = useLaunchChatSuggestionMutation();
    const { isServerError } = useRequestErrorHandler(error);

    const chatData = data?.data;
    const serverErrorMess = 'Chat indisponible. Réessayer plus tard.'
    
    useEffect(() => {
        if(chatData && chatData.has_prev_messages) {
            //If chat has prev messages, it means suggested question has already been sent to ai
            //Only need chatId to get previous messages
            dispatch(resetChat());
            navigate(`/user/chat/${chatData.chat_id}`);
        }
    }, [chatData, navigate, dispatch]);

    useEffect(() => {
        if(chatData && !chatData.has_prev_messages) {
            //If chat hasn't prev messages, the suggested question will be sent to ai
            dispatch(resetChat());
            dispatch(setIsSuggestedQuestion(true));
            dispatch(setUserQuestion(suggestion.question));

            navigate(`/user/chat/${chatData.chat_id}`);
        }
    }, [chatData, suggestion.question, navigate, dispatch]);

    return { mutate, isPending, isServerError, serverErrorMess }
}

export default useLaunchChatSuggestion;



    