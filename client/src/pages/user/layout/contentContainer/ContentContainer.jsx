import style from './contentContainer.module.css';

const ContentContainer = ({children}) => {
  return (
    <section className={style.contentContainer}>
        {children}
    </section>
  )
}

export default ContentContainer;