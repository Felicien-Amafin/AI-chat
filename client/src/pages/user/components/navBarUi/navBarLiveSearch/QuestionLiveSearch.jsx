import ListContainer from "../../listUi/ListContainer";
import SearchField from "../../SearchField";
import List from "../../listUi/list/List";
import ListTitle from "../../listUi/listTitle/ListTitle";
import ListDefaultMess from "../../listUi/listDefaultMess/ListDefaultMess";
import ListError from "../../listUi/listError/ListError";
import style from './navBarLiveSearch.module.css';

const questions = [
    'Quel est le nom du président cubain ?',
    'Quelle est la superficie de Cuba en km2 ?',
    'Pourquoi voit-on autant de voitures anciennes à cuba ?',
    'Le nombre de la population à Cuba?', 
];

const QuestionLiveSearch = () => {
    const list = true;
    const isLoading = false;
    const isError = false;
    const defaultMess = `Vous n'avez pas encore de catégories. Commencez à tchater afin de créer des catégories.`
    const errorMess = `La liste des catégories est indisponible pour le momment. Réessayez plus tard.`
    
    return (
        <ListContainer style={style.listContainer}>
            <SearchField 
                style={style}
                type='text'
                value=''
                placeholder='Rechercher une questions'
                onInputChange={null}
            />
            {list && <ListTitle title='Mes questions'/>}
            {list && <List onSelect={null} list={questions} styling={style.navBarlist}/>}
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

export default QuestionLiveSearch;