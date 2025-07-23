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

export const searchFilter = (list, searchTerm)=> {
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


