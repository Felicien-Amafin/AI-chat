import Icon from '../icon/Icon';
import style from './tchatSuggestion.module.css';

const TchatSuggestion = ({suggestion}) => {
  return (
    <>
      <div className={style.titlePlusIcon}>
        <h3>{suggestion.title}</h3>
        <Icon color={suggestion.icon.color}>{suggestion.icon.element}</Icon>
      </div>
      <p className={style.query}>{suggestion.query}</p>
    </>
  )
}

export default TchatSuggestion;