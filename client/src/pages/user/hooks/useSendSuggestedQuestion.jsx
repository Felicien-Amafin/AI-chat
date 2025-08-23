import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsSuggestedQuestion } from "../../../store/chatSlice";

const useSendSuggestedQuestion = ({submitMessage, chatHistory, chatId, userQuestion}) => {
    const dispatch = useDispatch();
    const { isSuggestedQuestion } = useSelector((state) => state.chat);
    
    useEffect(() => {
        if(isSuggestedQuestion) {
            submitMessage(userQuestion, chatHistory, chatId);
            dispatch(setIsSuggestedQuestion(false));
        }
    }, [chatHistory, chatId, isSuggestedQuestion, submitMessage, userQuestion, dispatch]);
}

export default useSendSuggestedQuestion;