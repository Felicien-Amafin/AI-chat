import { FaRegTrashAlt } from "react-icons/fa";
import style from './deleteCategorie.module.css';

const DeleteCategorie = ({onDelete}) => {
  return (
    <button 
      className={style.delete} 
      onClick={() => onDelete()}
      aria-label="Supprimer la catégorie"
    >
      <i><FaRegTrashAlt/></i>
      <p>Supprimer la catégorie</p>
    </button>
  )
}

export default DeleteCategorie;