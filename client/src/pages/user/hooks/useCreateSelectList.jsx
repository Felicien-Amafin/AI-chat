import { capitalizedFirstChar } from "../../../utils";

/* options: [
            { value: 'finance', label: 'Finance' },
            { value: 'histoire', label: 'Histoire' },
            { value: 'actualité', label: 'Actualité' },
        ], */
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