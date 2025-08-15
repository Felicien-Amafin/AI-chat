import { FaRegTrashAlt } from "react-icons/fa";
import style from './deleteCategorie.module.css';

const DeleteCategorie = () => {
  return (
    <button className={style.delete}>
      <i><FaRegTrashAlt/></i>
      <p>Supprimer la catégorie</p>
    </button>
  )
}

export default DeleteCategorie;