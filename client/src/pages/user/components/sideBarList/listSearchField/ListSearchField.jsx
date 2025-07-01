import { IoSearch } from "react-icons/io5";
import style from './listSearchField.module.css';

const ListSearchField = ({type, value, placeholder, onInputChange}) => {
  return (
   <div className={`${style.search} flexRow-allCentered`}>
      <i className={style.icon}>
        <IoSearch/>
      </i>
      <input 
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e)=> onInputChange(e)}
    />
    </div>
  )
}

export default ListSearchField;