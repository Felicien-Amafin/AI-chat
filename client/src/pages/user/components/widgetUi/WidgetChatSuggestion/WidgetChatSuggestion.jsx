import Loader from '../../../../../components/others/Loader';
import useLaunchChatSuggestion from '../../../hooks/useLaunchChatSuggestion';
import WidgetIcon from '../widgetIcon/WidgetIcon';
import style from './widgetChatSuggestion.module.css';

const WidgetChatSuggestion = ({suggestion}) => {
  const { mutate, isPending, isServerError } = useLaunchChatSuggestion(suggestion);

  const launchChatSuggestion = () => {
    mutate({ 
      category: suggestion.category.toLowerCase(), 
      title: suggestion.title.toLowerCase()
    });
  }

  return (
    <div className={`${style.container} flexColumn-allCentered`}>
      {isPending && <Loader size={20} color='white'/>}
      {!isPending && 
        <div 
          className={`${style.chatSuggestion} flex-column`}
          onClick={launchChatSuggestion}
        >
          <div className={style.titlePlusIcon}>
            <h3>{suggestion.category}</h3>
            <WidgetIcon color={suggestion.icon.color}>{suggestion.icon.element}</WidgetIcon>
          </div>
          <p className={style.question}>{suggestion.question}</p>
        </div>
      }
    </div>
  )
}

export default WidgetChatSuggestion;