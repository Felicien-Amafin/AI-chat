import { useNavigate } from 'react-router-dom';
import { TbCategory } from "react-icons/tb";
import List from '../list/List';
import ListContainer from '../ListContainer/ListContainer';
import SearchField from '../../SearchField';
import ListTitle from "../listTitle/ListTitle";
import ListDefaultMess from '../listDefaultMess/ListDefaultMess';
import ListLoader from '../listLoader/ListLoader';
import ListError from '../listError/ListError';
import style from './categorieList.module.css';

const CategoriesList = () => {
    const list = true;
    const isLoading = false;
    const isError = false;
    const defaultMess = `Vous n'avez pas encore de catégories. Commencez à tchater afin de créer des catégories.`
    const errorMess = `La liste des catégories est indisponible pour le momment. Réessayez plus tard.`
    
    const navigate = useNavigate();

    const handleNavigation = (categorie)=> {
        navigate(`/user/categories/${categorie}`);
    }

    return (
        <ListContainer>
            <SearchField 
                style={style}
                type='text'
                value=''
                placeholder='Rechercher une catégorie'
                onInputChange={null}
            />
            {list && <ListTitle title='Mes catégories'/>}
            {list && <List onSelect={handleNavigation}/>}
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

export default CategoriesList;