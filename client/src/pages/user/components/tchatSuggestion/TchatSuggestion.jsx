import style from './tchatSuggestion.module.css';

const TchatSuggestion = ({suggestion}) => {
  return (
    <>
      <div className={style.titlePlusIcon}>
          <h3>{suggestion.title}</h3>
          <i>{suggestion.icon}</i>
      </div>
      <p className={style.query}>{suggestion.query}</p>
    </>
  )
}

export default TchatSuggestion;