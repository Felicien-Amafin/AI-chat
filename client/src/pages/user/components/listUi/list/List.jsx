import style from './list.module.css';

const List = ({onSelect, list, isSearchResult, styling}) => {

    return (
        <ul className={`${style.list} ${styling} flex-column`}>
            {list && list.map((listItem)=> <li 
                key={listItem}
                className={`${style.option} flex-column`}
            >
                <button 
                    onClick={()=> onSelect(listItem)}
                    className={style.button}
                >
                    {listItem}
                </button>
            </li>)}
            {!isSearchResult && <li 
                className={style.searchNoResult}
            >
                No results for this search...
            </li>}
        </ul>
    )
}

export default List;