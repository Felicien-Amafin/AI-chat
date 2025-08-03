import { capitalizedFirstChar } from "../../../utils";

const useCreateSelectList = (list) => {
    const listOptions = list.map((listItem) => {
       return { 
            value: listItem.name.toLowerCase(),
            label: capitalizedFirstChar(listItem.name) 
        }
    });

    return { listOptions }
}

export default useCreateSelectList;