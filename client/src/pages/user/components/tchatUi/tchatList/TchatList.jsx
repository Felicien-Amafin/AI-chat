import style from './tchatList.module.css';
import Widget from '../../widgetUi/widget/Widget';
import WidgetTchatTopic from '../../widgetUi/widgetTchatTopic/WidgetTchatTopic';

const TchatList = ({tchatList}) => {
  return (
    <div className={`${style.tchatList} content`}>
        <ol>
            {tchatList?.map((tchat) => 
                //tchat[0] is the tchat's id
                <Widget key={tchat[0]}>
                    <WidgetTchatTopic tchat={tchat}/>
                </Widget>
            )}
        </ol>
    </div>
  )
}

export default TchatList;