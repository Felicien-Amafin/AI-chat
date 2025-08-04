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
    const newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
}

export const termFilter = (list, searchTerm)=> {
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
    const matchingCategorie = categories?.filter((categorie) => {
        if(categorieName.toLowerCase() === categorie.name.toLowerCase()) {
            return categorie;
        }
    })

    return matchingCategorie;
}

export const createNavList = (list) => {
    const listNames = list?.map((categorie) => categorie.name);

    return listNames;
}

export const createSelectList = (list) => {
    const listOptions = list?.map((listItem) => {
       return { 
            value: listItem.name.toLowerCase(),
            label: capitalizedFirstChar(listItem.name) 
        }
    });
 
    return listOptions;
}

export const searchFilter = (list, searchValue) => {
    const listResult = termFilter(list, searchValue);
    const isSearchResult = listResult?.length > 0;

    return { listResult, isSearchResult };
}


