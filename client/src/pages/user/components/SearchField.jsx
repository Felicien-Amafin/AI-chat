import { IoSearch } from "react-icons/io5";

const SearchField = ({style, type, value, placeholder, onInputChange}) => {
  return (
   <div className={style.searchField}>
      <i className={style.icon}><IoSearch/></i>
      <input 
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e)=> onInputChange(e)}
      />
    </div>
  )
}

export default SearchField;