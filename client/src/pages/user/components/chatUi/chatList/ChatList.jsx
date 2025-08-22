import { chatFilter } from '../../../../../utils';
import Widget from '../../widgetUi/widget/Widget';
import WidgetChatTopic from '../../widgetUi/widgetChatTopic/WidgetChatTopic';
import style from './chatList.module.css';

const ChatList = ({chatList, searchValue}) => {
    const filteredChats = chatFilter(chatList, searchValue);
    const isNoChats = chatList.length === 0;
    const isNoResults = filteredChats?.length === 0 && searchValue;

    return (

        <div className={`${style.chatList} content`}>
            <ol>
                {filteredChats && filteredChats.map((chat) => 
                    //chat[0] is the chat's id
                    <Widget key={chat[0]}>
                        <WidgetChatTopic chat={chat}/>
                    </Widget>
                )}
                {isNoChats && <p className={style.message}>Cette catégorie est vide</p>}
                {isNoResults && <p className={style.message}>Aucun résultat pour cette recherche</p>}
            </ol>
        </div>
    )
}

export default ChatList;