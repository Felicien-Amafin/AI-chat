import FormInput from '../../../../../components/formUi/formInput/FormInput';
import FormBtn from '../../../../../components/formUi/FormBtn';
import SearchField from '../../SearchField';
import ListContainer from '../../listUi/ListContainer';
import List from '../../listUi/list/List';
import { formNewTchat } from '../../../userConstant';
import NewTchatCheckBox from '../newTchatCheckBox/NewTchatCheckBox';
import NewTchatBtnRow from '../newTchatBtnRow/NewTchatBtnRow';
import style from './newTchatForm.module.css';

const categories = [
    'Histoire',
    'Littérature',
    'Actualité',
    'Cinéma', 
];

const NewTchatForm = () => {
  return (
    <div className={`${style.formContainer} flex-column`}>
        <form className={`${style.form} content flex-column`}>
            <h2>Bienvenue dans le gestionnaire de tchat.</h2>
            <div className={`${style.tchatTitle} flex-column`}>
                <p>Choisissez un titre pour ce tchat:</p>
                <FormInput
                    input={formNewTchat.title}
                    /* error={}
                    value={}
                    required={}
                    onInputChange={} */
                />
            </div>
            <div className={`${style.group} flex-column`}>
                <p>Où souhaitez-vous classer ce tchat?</p>
                <NewTchatBtnRow/>
                {/* <FormInput 
                    input={formNewTchat.categorie}
                    error={}
                    value={}
                    required={}
                    onInputChange={}
                /> */}
                <ListContainer style={style.listContainer}>
                    <SearchField
                        style={style}
                        type='text'
                        value=''
                        placeholder='Rechercher une catégorie'
                        onInputChange={null}
                    />
                    <NewTchatCheckBox isChecked={true}>Catégorie</NewTchatCheckBox>
                    <List onSelect={null} list={categories} styling={style.newTchatList}/>
                </ListContainer> 
                <FormBtn 
                    style='whiteBtn btnWide button'
                    text='Commencer' 
                    onClick={null} 
                    isPending={null}
                />
            </div>
        </form>
    </div>
  )
}

export default NewTchatForm;