import WidgetIcon from '../widgetIcon/WidgetIcon';
import style from './widgetChatSuggestion.module.css';

const WidgetChatSuggestion = ({suggestion}) => {
  return (
    <div className={`${style.chatSuggestion} flex-column`}>
      <div className={style.titlePlusIcon}>
        <h3>{suggestion.title}</h3>
        <WidgetIcon color={suggestion.icon.color}>{suggestion.icon.element}</WidgetIcon>
      </div>
      <p className={style.query}>{suggestion.query}</p>
    </div>
  )
}

export default WidgetChatSuggestion;