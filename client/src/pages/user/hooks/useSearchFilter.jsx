import { searchFilter } from "../../../utils";

const useSearchFilter = (list, searchValue) => {
    
    const listResult = searchFilter(list, searchValue);
    const isSearchResult = listResult?.length > 0;

    return { listResult, isSearchResult };
}

export default useSearchFilter;