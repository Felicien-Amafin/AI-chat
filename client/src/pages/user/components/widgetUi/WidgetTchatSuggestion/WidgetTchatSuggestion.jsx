import WidgetIcon from '../widgetIcon/WidgetIcon';
import style from './widgetTchatSuggestion.module.css';

const WidgetTchatSuggestion = ({suggestion}) => {
  return (
    <>
      <div className={style.titlePlusIcon}>
        <h3>{suggestion.title}</h3>
        <WidgetIcon color={suggestion.icon.color}>{suggestion.icon.element}</WidgetIcon>
      </div>
      <p className={style.query}>{suggestion.query}</p>
    </>
  )
}

export default WidgetTchatSuggestion;