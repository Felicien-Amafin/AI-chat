import Loader from "../../../../../components/others/Loader";
import style from "./formLoader.module.css";

const FormLoader = () => {
  return (
    <div className={`${style.formLoader} flex-column`}>
        <Loader size={70} color='white'/>
    </div>
  )
}

export default FormLoader;