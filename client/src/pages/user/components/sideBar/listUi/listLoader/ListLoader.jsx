import Loader from '../../../../../../components/others/Loader';
import style from './listLoader.module.css';

const ListLoader = () => {
  return (
    <div className={`${style.listLoader} flexColumn-allCentered`}>
      <Loader size={30}/>
    </div>
  )
}

export default ListLoader;