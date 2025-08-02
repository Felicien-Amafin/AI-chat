import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useGetCategories from '../../../hooks/useGetCategories';
import { TbCategory } from "react-icons/tb";
import List from '../../listUi/list/List';
import ListContainer from '../../listUi/ListContainer';
import SearchField from '../../SearchField';
import ListTitle from "../../listUi/listTitle/ListTitle";
import ListDefaultMess from '../../listUi/listDefaultMess/ListDefaultMess';
import ListLoader from '../../listUi/listLoader/ListLoader';
import ListError from '../../listUi/listError/ListError';
import style from './navBarLiveSearch.module.css';
import useSearchFilter from '../../../hooks/useSearchFilter';
import useExtractCategoriesNames from '../../../hooks/useExtractCategoriesNames';

const CategorieLiveSearch= () => {
    const [searchValue, setSearchValue] = useState('');
    const { isPending, categories, isServerError } = useGetCategories();
    const { categoriesNames } = useExtractCategoriesNames(categories);
    const { listResult, isSearchResult } = useSearchFilter(categoriesNames, searchValue);

    const navigate = useNavigate();
    const handleNavigation = (categorie) => {
        navigate(`/user/categories/${categorie}`);
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    
    const defaultMess = `Vous n'avez pas encore de catégories. Commencez à tchater afin de créer des catégories.`
    const errorMess = `La liste de vos catégories est indisponible pour le momment. Réessayez plus tard.`
    
    return (
        <ListContainer style={style.listContainer}>
            {categoriesNames && 
                <SearchField 
                    style={style}
                    type='text'
                    value={searchValue}
                    placeholder='Rechercher une catégorie'
                    onInputChange={handleChange}
                />
            }
            {categoriesNames && <ListTitle title='Mes catégories'/>}
            {categoriesNames && 
                <List 
                    onSelect={handleNavigation} 
                    list={listResult} 
                    isSearchResult={isSearchResult} 
                    styling={style.navBarlist}
                />
            }
            {(!categoriesNames && !isPending && !isServerError) && 
                <ListDefaultMess defaultMess={defaultMess}> <TbCategory/></ListDefaultMess>
            }
            {(!categoriesNames && isPending) && <ListLoader/>}
            {isServerError && <ListError errorMess={errorMess}/>}
        </ListContainer>
    )
}

export default CategorieLiveSearch;