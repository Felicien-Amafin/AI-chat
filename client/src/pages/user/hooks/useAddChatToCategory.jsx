import { useAddChatToCategoryMutation } from "../../../services/mutations";

const useAddChatToCategory = () => {
    const {isPending, } = useAddChatToCategoryMutation();
}

export default useAddChatToCategory;