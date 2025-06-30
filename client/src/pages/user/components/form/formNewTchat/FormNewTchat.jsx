import FormBtn from '../../../../../components/formUi/FormBtn';
import FormInput from '../../../../../components/formUi/FormInput';
import useForm from '../../../../../hooks/useForm';
import style from './formNewTchat.module.css';
import { IoMdRadioButtonOn } from "react-icons/io";

const FormNewTchat = () => {
  const { formData, handleChange } = useForm();

  return (
    <form className={`${style.form} flex-column`}>
      <FormInput
        input={formNewTchat.topic}
        value={formData[formNewTchat.topic.name]}
        required={formNewTchat.is_required}
        onInputChange={handleChange}
      />
      <div className={style.categorie}>
        <button className={`${style.btn} ${style.selected}`}>
          {/* <i><IoMdRadioButtonOn /></i> */}
          <p>Nouvelle catégorie</p>
        </button>
        <button className={style.btn}>
          {/* <i><IoMdRadioButtonOn /></i> */}
          <p>Nouvelle catégorie</p>
        </button>
      </div>
      {/* <div className={`${style.categories} flex-column`}>
        <p>Où dois-je classer cette discussion?</p>
        <div className={style.selectBox}>
          <select name="categories" id="cars">
            <option value="fruit">Nouvelle Catégorie</option>
            <option value="vegetable">Catégories Existantes</option>
          </select>
          <i><MdKeyboardArrowDown /></i>
        </div>
      </div> */}
      
      
    
        {/* <CategoriesList/> */}
       {/*  <FormBtn
          style=''
          text='Suivant ->'
          onClick={null}
          isPending={null}
        /> */}
    </form>
  )
}

export default FormNewTchat;