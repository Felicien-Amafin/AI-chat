import { IoSearch } from "react-icons/io5";

const SearchField = ({style, type, value, placeholder, onInputChange}) => {
  return (
   <div className={style.searchField}>
      <i className={style.icon}><IoSearch/></i>
      <input 
        type={type}
        value={value || ''}
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </div>
  )
}

export default SearchField;