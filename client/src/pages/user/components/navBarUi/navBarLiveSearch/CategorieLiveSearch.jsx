import { useNavigate } from 'react-router-dom';
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

const CategorieLiveSearch= () => {
    const { isFetchingAccessTk, isCategoriesPending, isServerError, categories} = useGetCategories();

    const navigate = useNavigate();
    const handleNavigation = (categorie)=> {
        navigate(`/user/categories/${categorie}`);
    };

    const defaultMess = `Vous n'avez pas encore de catégories. Commencez à tchater afin de créer des catégories.`
    const errorMess = `La liste de vos catégories est indisponible pour le momment. Réessayez plus tard.`

    return (
        <ListContainer style={style.listContainer}>
            {categories && 
                <SearchField 
                    style={style}
                    type='text'
                    value=''
                    placeholder='Rechercher une catégorie'
                    onInputChange={null}
                />
            }
            {categories && <ListTitle title='Mes catégories'/>}
            {categories && <List onSelect={handleNavigation} list={categories} styling={style.navBarlist}/>}
            {(!categories && !isCategoriesPending && !isFetchingAccessTk && !isServerError) && 
                <ListDefaultMess defaultMess={defaultMess}> 
                    <TbCategory/>
                </ListDefaultMess>
            }
            {(isCategoriesPending || isFetchingAccessTk) && <ListLoader/>}
            {isServerError && <ListError errorMess={errorMess}/>}
        </ListContainer>
    )
}

export default CategorieLiveSearch;