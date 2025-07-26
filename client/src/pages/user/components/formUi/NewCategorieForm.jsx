import { formNewCategorie } from '../../constant/forms';
import FormInput from '../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../components/formUi/FormBtn';


const NewCategorieForm = ({style}) => {
  
  return (
    <form 
      className={`${style} flex-column`}
      onSubmit={null}
    >
      {formNewCategorie.map((input) => 
        <FormInput
          key={input.name}
          input={input}
          /* error={} */
          value=''
          required={true}
          onInputChange={null}
        />)
      }
      <FormBtn
        style='whiteBtn button'
        text='Commencer' 
        onClick={null} 
        isPending={null}
      />
    </form>
  )
}

export default NewCategorieForm;