import Loader from '../Loader';
import style from './pageLoader.module.css';

const PageLoader = ({size, color}) => {
  return (
    <div className={`${style.loader} flexRow-allCentered`}>
        <Loader size={size} color={color}/>
    </div>
  )
}

export default PageLoader;