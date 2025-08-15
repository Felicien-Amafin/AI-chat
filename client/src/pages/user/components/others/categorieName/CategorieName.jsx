import { capitalizedFirstChar } from "../../../../../utils";
import style from './categorieName.module.css';

const CategorieName = ({name}) => {
  return (
    <div className={style.categorie}>
      <p>Catgégorie/ {capitalizedFirstChar(name)}</p>
    </div>
  )
}

export default CategorieName;