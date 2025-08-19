import style from './errorOnPage.module.css';

const ErrorOnPage = ({error}) => {
  return (
    <div className={`${style.errorOnPage} flexRow-allCentered`}>
        <div className={`${style.messageBox} containerAnim flexRow-allCentered`}>
            <p className={style.error}>{error}</p>
        </div>
    </div>
  )
}

export default ErrorOnPage;