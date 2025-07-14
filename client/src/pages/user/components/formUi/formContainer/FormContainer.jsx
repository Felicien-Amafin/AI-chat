import { useState } from 'react';
import ExistingCategoriesForm from '../ExistingCategoriesForm';
import NewCategorieForm from '../NewCategorieForm';
import SwitchingBtns from '../switchingBtns/SwitchingBtns';
import style from './formContainer.module.css';

const FormContainer = () => {
    const [isSwitching, setIsSwitching] = useState(true);

    return (
        <div className={`${style.formContainer} containerAnim flex-column`}>
            <div className={`${style.content} gradientScroll flex-column`}>
                <h2>Bienvenue dans le gestionnaire de tchat.</h2>
                <div className={`${style.classification} flex-column`}>
                    <p>Où souhaitez-vous classer ce tchat ?</p>
                    <p>* Vous pouvez créer ou sélectionner une catégorie existante</p>
                </div>
                <SwitchingBtns onSwitch={setIsSwitching} isSwitching={isSwitching}/>
                {isSwitching && <NewCategorieForm style={style.form}/>}
                {!isSwitching && <ExistingCategoriesForm style={style.form}/>}
            </div>
        </div>
    )
}

export default FormContainer;