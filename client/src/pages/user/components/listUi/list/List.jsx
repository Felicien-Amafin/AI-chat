import style from './list.module.css';
import React, { useRef } from "react";

const List = ({onSelect, list, isSearchResult, styling}) => {
    const listRef = useRef(null);

    const handleScrollToTop = () => {
        if (listRef.current) {
        listRef.current.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
        }
    };

    handleScrollToTop();

    const defaultMess = 'Aucun résultat...';

    return (
        <ul className={`${style.list} ${styling} flex-column`} ref={listRef}>
            {list && list.map((listItem, index)=> 
                <li 
                    key={`${listItem}-${index}`}
                    className={`${style.option} flex-column`}
                >
                    <button 
                        onClick={()=> onSelect(index)}
                        className={style.button}
                    >
                        {listItem}
                    </button>
                </li>)
            }
            {!isSearchResult && <li className={style.searchNoResult}>{defaultMess}</li>}
        </ul>
    )
}

export default List;