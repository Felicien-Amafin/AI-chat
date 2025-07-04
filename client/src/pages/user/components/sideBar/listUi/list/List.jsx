import style from './list.module.css';

const categories = [
    'Histoire',
    'Littérature',
    'Actualité',
    'Cinéma', 
];

const List = ({onSelect}) => {
    const isSearchResult = true;

    return (
        <ul className={`${style.list} flex-column`}>
            {isSearchResult && categories.map((categorie)=> <li 
                key={categorie}
                className={`${style.categorie} flex-column`}
            >
                <button 
                    onClick={()=> onSelect(categorie)}
                    className={style.button}
                >
                    {categorie}
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