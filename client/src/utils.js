export const trimAndLowerCase = (obj, array)=> {
    // Trim and lowercase only specific keys' value
    if(array && array.length > 0) {
       const newObj = { ...obj };

       array.map((key)=> {
        newObj[key] = obj[key]?.trim().toLowerCase();
       });
       
       return newObj;
    }

    // Trim and lowercase all keys' value
    if(!array) {
        const newObj = {};

        for (const [key, value] of Object.entries(obj)) {
            newObj[key] = value.trim().toLowerCase();
        }
        
        return newObj;
    }
}

export const capitalizedFirstChar = (string)=> {
    //Capitalize first Char of string
    const newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
}

export const termFilter = (list, searchTerm)=> {
    //Return an array of string matching with searchTerm
    if(!list) return;
    
    return list.filter((listTerm)=> {
        const listTermToLCase = listTerm.toLowerCase();
        const searchTermToLCase = searchTerm?.toLowerCase();

        if(listTermToLCase.includes(searchTermToLCase)) {
            return listTerm;
        }

        if((searchTerm === '' )||( searchTerm === undefined)) {
            return list;
        } 
    })
}

export const getCategorieInArray = (categorieName, categories) =>{
    //Return a single categorie using categorieName as a filter element
    const matchingCategorie = categories?.filter((categorie) => {
        if(categorieName.toLowerCase() === categorie.name.toLowerCase()) {
            return categorie;
        }
    })

    return matchingCategorie;
}

export const createNavList = (list) => {
    //Returns the list of all categories' name
    const listNames = list?.map((categorie) => categorie.name);

    return listNames;
}

export const createSelectList = (list) => {
    //Returns the list of all categories' name to use in Select component
    const listOptions = list?.map((listItem) => {
       return { 
            value: listItem.name.toLowerCase(),
            label: capitalizedFirstChar(listItem.name) 
        }
    });
 
    return listOptions;
}

export const searchFilter = (list, searchValue) => {
    //Returns values needed in the search filtering process
    const filteredList = termFilter(list, searchValue);
    const isFilteredTerm = filteredList?.length > 0;

    return { filteredList, isFilteredTerm };
}

export const createQuestionsList = (tchatsList) => {
    //Create tchat questions list to use in navBar
    const reversedTchatsList = tchatsList?.reverse();

    const questions = reversedTchatsList?.map((tchat) => {
        return capitalizedFirstChar(tchat.question);
    });

    return { reversedTchatsList, questions};
}

export const truncateStringInList = (list, strMaxLength) => {
    //Adds ellipses to the end of strings in a list
    const formatedList = list?.map((str) => {
        if (str.length <= strMaxLength) {
            return str;
        }
        return str.slice(0, strMaxLength) + '...';
    })

    return { formatedList }
}
