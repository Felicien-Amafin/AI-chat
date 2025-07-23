import { searchFilter } from "../../../utils";

const useSearchFilter = (list, searchValue) => {
    const searchResult = searchFilter(list, searchValue);
    const isSearchResult = searchResult?.length > 0;

    return { searchResult, isSearchResult };
}

export default useSearchFilter;