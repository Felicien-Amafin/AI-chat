import style from './list.module.css';
import { useRef } from "react";

const List = ({onSelect, list, isSearchResult, styling, isScrollingTop}) => {
    const listRef = useRef(null);

    const scrollTop = () => {
        if (listRef.current) {
            listRef.current.scrollTo({
                top: 0,
                behavior: "smooth", 
            });
        }
    };

    if(isScrollingTop) scrollTop();

    const defaultMess = 'Aucun résultat...';

    return (
        <ul className={`${style.list} ${styling} flex-column`} ref={listRef}>
            {list && list.map((listElmt)=> 
                <li //listElmt[0] is a string. listElmt[1] is the index of the string
                    key={`${listElmt[0]}-${listElmt[1]}`}
                    className={`${style.option} flex-column`}
                >
                    <button 
                        onClick={()=> onSelect(listElmt[1])}
                        className={style.button}
                    >
                        {listElmt[0]}
                    </button>
                </li>)
            }
            {!isSearchResult && <li className={style.searchNoResult}>{defaultMess}</li>}
        </ul>
    )
}

export default List;