
const useCreateNavList = (list) => {
    const listNames = list?.map((categorie) => categorie.name);

    return { listNames };
}

export default useCreateNavList;