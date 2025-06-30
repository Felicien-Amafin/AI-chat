import style from './sideBarList.module.css';
import { TbCategory } from "react-icons/tb";
import Loader from '../../../../components/others/Loader';
import Search from './search/Search';
import List from './list/List';

const SideBarList = () => {
    const list = true;
    const isLoading = false;
    const isError = true;
    const defaultMess = `Vous n'avez pas encore de catégories. Commencez à tchater afin de créer des catégories.`
    const errorMess = `Liste des catégories indisponible pour le momment. Réessayez plus tard.`

    return (
        <div className={`${style.sideBarList} flex-column`}>
            <Search 
                type='text'
                value=''
                placeholder='Rechercher une catégorie'
                onInputChange={null}
            />
            {list && <List/>}
            {/* {(!list && !isLoading && !isError) && <div 
                className={`${style.defaultMessPlusIcon} flex-column`}
            >
                <p className={style.message}>{defaultMess}</p>
                <i><TbCategory/></i>
            </div>} */}
            {/* {isLoading && <div className={`${style.loader} flexColumn-allCentered`}>
                <Loader size={25}/>
            </div>} */}
          {/*   {isError && <p className={`${style.message} ${style.error} error`}>
                {errorMess}
            </p>} */}
        </div>
    )
}

export default SideBarList;