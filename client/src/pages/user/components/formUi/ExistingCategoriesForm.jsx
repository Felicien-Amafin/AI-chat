import Select from 'react-select';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';
import { formExistingCategories } from '../../constant/forms';


const ExistingCategoriesForm = ({style}) => {
  return (
    <form className={`${style} flex-column`}>
      <Select 
        styles={formExistingCategories.select.styles}
        options={formExistingCategories.select.options}
        placeholder='Rechercher une catégorie'
        /* onChange={handleInputChange} */
      />
      <FormInput
        input={formExistingCategories.input}
        /* error={}
        value={}
        required={}
        onInputChange={} */
      />
      <FormBtn
        style='whiteBtn button'
        text='Commencer' 
        onClick={null} 
        isPending={null}
      />
    </form>
  )
}

export default ExistingCategoriesForm;