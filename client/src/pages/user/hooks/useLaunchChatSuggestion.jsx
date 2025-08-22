import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useLaunchChatSuggestionMutation } from "../../../services/mutations";

const useLaunchChatSuggestion = () => {
    const { mutate, isPending, data, error } = useLaunchChatSuggestionMutation();
    const { isServerError } = useRequestErrorHandler(error);

    console.log(data);
    console.log(error);
    /* const chat = data.data. */
    return { mutate, isPending }
}

export default useLaunchChatSuggestion;