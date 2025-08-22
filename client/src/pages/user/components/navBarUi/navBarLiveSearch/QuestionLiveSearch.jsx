import ListContainer from "../../listUi/ListContainer";
import SearchField from "../../others/SearchField";
import List from "../../listUi/list/List";
import ListTitle from "../../listUi/listTitle/ListTitle";
import ListDefaultMess from "../../listUi/listDefaultMess/ListDefaultMess";
import ListError from "../../listUi/listError/ListError";
import ListLoader from "../../listUi/listLoader/ListLoader"
import { TbMessageCircleQuestion } from "react-icons/tb";
import useGetChat from "../../../hooks/useGetChat";
import { useState } from "react";
import { capitalizedFirstChar, createQuestionsList, navBarLiveFilter, truncateStringInList } from "../../../../../utils";
import { useDispatch } from "react-redux";
import style from './navBarLiveSearch.module.css';
import { setAiAnswer, setUserQuestion } from "../../../../../store/chatSlice";
import useRedirectTo404 from "../../../hooks/useRedirectTo404";

const QuestionLiveSearch = ({chatId}) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const { isPending, chatMessages, isServerError, isClientError, isNotFound } = useGetChat(chatId);//Get chat's questions + answer
    const { questions, reversedChatsList } = createQuestionsList(chatMessages);//Create list of questions to display in ui
    const { filteredList, isFilteredTerm } = navBarLiveFilter(questions, searchValue);//Search for a question by entering specific terms
    const { formatedList } = truncateStringInList(filteredList, 80);//Adds ellipses to questions when they are too long
    useRedirectTo404(isClientError || isNotFound);

    const errorMess = 'La liste de vos questions est indisponible. Réessayez plus tard.'
    const defaultMess = 'Vos questions appraitront ici';

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    
    const handleChat = (index) => {
        //Displays user's question and ai's answer in chatContainer's ui 
        dispatch(setUserQuestion(capitalizedFirstChar(reversedChatsList[index].question)));
        dispatch(setAiAnswer(reversedChatsList[index].answer));
    }

    return (
        <ListContainer style={style.listContainer}>
            {questions && 
                <SearchField 
                style={style}
                type='text'
                value={searchValue}
                placeholder='Rechercher une questions'
                onInputChange={handleChange}
                />
            }
            {questions && <ListTitle title='Vos questions'/>}
            {questions && 
                <List 
                    onSelect={handleChat} 
                    list={formatedList} 
                    isSearchResult={isFilteredTerm}
                    styling={style.navBarlist}
                />
            }
            {(!questions && !isPending && !isServerError) && 
                <ListDefaultMess defaultMess={defaultMess}> 
                    <TbMessageCircleQuestion />
                </ListDefaultMess>
            }
            {isPending && <ListLoader/>}
            {isServerError && <ListError errorMess={errorMess}/>}
        </ListContainer>
    )
}

export default QuestionLiveSearch;