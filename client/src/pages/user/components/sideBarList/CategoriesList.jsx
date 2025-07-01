import { TbCategory } from "react-icons/tb";
import List from './list/List';
import ListContainer from './ListContainer/ListContainer';
import ListSearchField from './listSearchField/ListSearchField';
import ListTitle from "./listTitle/ListTitle";
import ListDefaultMess from './listDefaultMess/ListDefaultMess';
import ListLoader from './listLoader/ListLoader';
import ListError from './listError/ListError';

const CategoriesList = () => {
    const list = true;
    const isLoading = false;
    const isError = false;
    const defaultMess = `Vous n'avez pas encore de catégories. Commencez à tchater afin de créer des catégories.`
    const errorMess = `La liste des catégories est indisponible pour le momment. Réessayez plus tard.`

    return (
        <ListContainer>
            <ListSearchField 
                type='text'
                value=''
                placeholder='Rechercher une catégorie'
                onInputChange={null}
            />
            {list && <ListTitle title='Mes catégories'/>}
            {list && <List/>}
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