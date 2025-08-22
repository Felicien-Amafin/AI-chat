import { FaRegTrashAlt } from "react-icons/fa";
import style from './deleteCategory.module.css';

const DeleteCategory = ({onDelete}) => {
  return (
    <button 
      type="button"
      className={style.delete} 
      onClick={() => onDelete()}
      aria-label="Supprimer la catégorie"
    >
      <i><FaRegTrashAlt/></i>
      <p>Supprimer la catégorie</p>
    </button>
  )
}

export default DeleteCategory;