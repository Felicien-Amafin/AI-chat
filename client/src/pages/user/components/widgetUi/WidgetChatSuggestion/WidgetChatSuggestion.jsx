import useLaunchChatSuggestion from '../../../hooks/useLaunchChatSuggestion';
import WidgetIcon from '../widgetIcon/WidgetIcon';
import style from './widgetChatSuggestion.module.css';

const WidgetChatSuggestion = ({suggestion}) => {
  const { mutate, isPending } = useLaunchChatSuggestion();

  const handleNavigation = () => {
    mutate({ 
      category: suggestion.category.toLowerCase(), 
      title: suggestion.title.toLowerCase()
    });
  }

  return (
    <div 
      className={`${style.chatSuggestion} flex-column`}
      onClick={handleNavigation}
    >
      <div className={style.titlePlusIcon}>
        <h3>{suggestion.category}</h3>
        <WidgetIcon color={suggestion.icon.color}>{suggestion.icon.element}</WidgetIcon>
      </div>
      <p className={style.question}>{suggestion.question}</p>
    </div>
  )
}

export default WidgetChatSuggestion;