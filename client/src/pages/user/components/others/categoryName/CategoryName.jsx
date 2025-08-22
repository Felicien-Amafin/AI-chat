import { capitalizedFirstChar } from "../../../../../utils";
import style from './categoryName.module.css';

const CategoryName = ({name}) => {
  return (
    <div className={style.category}>
      <p>Catgégorie/ {capitalizedFirstChar(name)}</p>
    </div>
  )
}

export default CategoryName;