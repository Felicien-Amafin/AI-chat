import style from './pageContainer.module.css';

const PageContainer = ({children}) => {
  return (
    <div className={`${style.pageContainer} bckGroundImg`}>
      {children}
    </div>
  )
}

export default PageContainer;