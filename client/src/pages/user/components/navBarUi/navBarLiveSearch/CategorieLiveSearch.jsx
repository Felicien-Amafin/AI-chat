import { useNavigate } from 'react-router-dom';
import { TbCategory } from "react-icons/tb";
import List from '../../listUi/list/List';
import ListContainer from '../../listUi/ListContainer';
import SearchField from '../../SearchField';
import ListTitle from "../../listUi/listTitle/ListTitle";
import ListDefaultMess from '../../listUi/listDefaultMess/ListDefaultMess';
import ListLoader from '../../listUi/listLoader/ListLoader';
import ListError from '../../listUi/listError/ListError';
import style from './navBarLiveSearch.module.css';

const categories = [
    'Histoire',
    'Littérature',
    'Actualité',
    'Cinéma', 
    'Cinéma', 
    'Cinéma', 
];

const CategorieLiveSearch= () => {
    /* useGetCategorieList */
    const list = true;
    const isLoading = false;
    const isError = false;
    const defaultMess = `Vous n'avez pas encore de catégories. Commencez à tchater afin de créer des catégories.`
    const errorMess = `La liste de vos catégories est indisponible pour le momment. Réessayez plus tard.`
    
    const navigate = useNavigate();

    const handleNavigation = (categorie)=> {
        navigate(`/user/categories/${categorie}`);
    }

    return (
        <ListContainer style={style.listContainer}>
            {list && <SearchField 
                style={style}
                type='text'
                value=''
                placeholder='Rechercher une catégorie'
                onInputChange={null}
            />}
            {list && <ListTitle title='Mes catégories'/>}
            {list && <List onSelect={handleNavigation} list={categories} styling={style.navBarlist}/>}
            {(!list && !isLoading && !isError) && 
                <ListDefaultMess defaultMess={defaultMess}> 
                    <TbCategory/>
                </ListDefaultMess>
            }
            {isLoading && <ListLoader/>}
            {isError && <ListError errorMess={errorMess}/>}
        </ListContainer>
    )
}

export default CategorieLiveSearch;