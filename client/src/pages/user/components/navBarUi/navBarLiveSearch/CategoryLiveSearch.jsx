import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useGetCategories from '../../../hooks/useGetCategories';
import { createNavList, navBarLiveFilter } from '../../../../../utils';
import { TbCategory } from "react-icons/tb";
import SearchField from '../../others/SearchField';
import List from '../../listUi/list/List';
import ListContainer from '../../listUi/ListContainer';
import ListTitle from "../../listUi/listTitle/ListTitle";
import ListDefaultMess from '../../listUi/listDefaultMess/ListDefaultMess';
import ListLoader from '../../listUi/listLoader/ListLoader';
import ListError from '../../listUi/listError/ListError';
import style from './navBarLiveSearch.module.css';

const CategoryLiveSearch= () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const { isPending, isServerError, categories } = useGetCategories();
    const listNames = createNavList(categories);
    const { filteredList, isFilteredTerm } = navBarLiveFilter(listNames, searchValue);

    const handleNavigation = (index) => {
        navigate(`/user/categories/${listNames[index][0].toLowerCase()}`); //Navigate to a specific category
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    
    const defaultMess = `Vous n'avez pas encore de catégories. Commencez à chater afin de créer des catégories.`
    const errorMess = `La liste de vos catégories est indisponible pour le momment. Réessayez plus tard.`
    
    return (
        <ListContainer style={style.listContainer}>
            {listNames && 
                <SearchField 
                    style={style}
                    type='text'
                    value={searchValue}
                    placeholder='Rechercher une catégorie'
                    onInputChange={handleChange}
                />
            }
            {listNames && <ListTitle title='Mes catégories'/>}
            {listNames && 
                <List 
                    onSelect={handleNavigation} 
                    list={filteredList} 
                    isSearchResult={isFilteredTerm} 
                    styling={style.navBarlist}
                    isScrollingTop={null}
                />
            }
            {(!listNames && !isPending && !isServerError) && 
                <ListDefaultMess defaultMess={defaultMess}> <TbCategory/></ListDefaultMess>
            }
            {(!listNames && isPending) && <ListLoader/>}
            {isServerError && <ListError errorMess={errorMess}/>}
        </ListContainer>
    )
}

export default CategoryLiveSearch;