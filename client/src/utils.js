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
    const newString = string?.charAt(0).toUpperCase() + string?.slice(1);
    return newString;
}

export const termFilter = (list, searchTerm)=> {
    //Returns an array of string that matching with searchTerm
    if(!list) return;
    
    //List is an array of array.
    return list.filter((listElmt)=> {
        const stringToLCase = listElmt[0].toLowerCase();
        const searchTermToLCase = searchTerm?.toLowerCase();

        if(stringToLCase.includes(searchTermToLCase)) {
            return listElmt;
        }

        if((searchTerm === '' )||( searchTerm === undefined)) {
            return list;
        } 
    })
}

export const navBarLiveFilter = (list, searchValue) => {
    //Returns values needed in the search filtering process
    const filteredList = termFilter(list, searchValue);
    const isFilteredTerm = filteredList?.length > 0;

    return { filteredList, isFilteredTerm };
}

export const createNavList = (list) => {
    //Returns the list of all categories' name
    const listNames = list?.map((categorie, index) => [categorie.name, index]);

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

export const createQuestionsList = (tchatsList) => {
    //Create tchat questions list to use in navBar
    const reversedTchatsList = tchatsList?.reverse();

    const questions = reversedTchatsList?.map((tchat, index) => {
        return [ capitalizedFirstChar(tchat.question), index ];
    });
    
    return { reversedTchatsList, questions};
}

export const truncateStringInList = (list, strMaxLength) => {
    //Adds ellipses to the end of strings in a list
    const formatedList = list?.map((listElmt) => {
        //listElmt[0] is a string
        if (listElmt[0].length <= strMaxLength) {
            return [listElmt[0], listElmt[1]]; //Returns the string + it's index
        }

        //Returns the truncated string + it's index
        return [listElmt[0].slice(0, strMaxLength) + '...', listElmt[1]] 
    })

    return { formatedList }
}

export const truncateString = (str, strMaxLength) => {
    
    if(str.length <= strMaxLength) return str;

    return str.slice(0, strMaxLength) + '...';
}

export const tchatFilter = (tchatList, searchTerm) => {
    //Returns tchats that matches the search term

    if(
        (searchTerm === '' ) || 
        (searchTerm === undefined) ||
        (tchatList === null)
    ) {
        return tchatList;
    }

    return tchatList?.filter((tchat) => {
        const tchatTitle = tchat[1].title.toLowerCase();
        const search = searchTerm.toLowerCase();

        if(tchatTitle.includes(search)) {
            return tchat;
        }
    })
}