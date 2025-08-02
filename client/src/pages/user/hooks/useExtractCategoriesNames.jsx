
const useExtractCategoriesNames = (categories) => {
    const categoriesNames = categories?.map((categorie) => categorie.name);
    
    return { categoriesNames };
}

export default useExtractCategoriesNames;