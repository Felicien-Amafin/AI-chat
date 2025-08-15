import Widget from '../../widgetUi/widget/Widget';
import WidgetTchatTopic from '../../widgetUi/widgetTchatTopic/WidgetTchatTopic';
import style from './tchatList.module.css';

const TchatList = ({tchatList}) => {
    const isNoSearchResult = tchatList?.length === 0;

    return (
        <div className={`${style.tchatList} content`}>
            <ol>
                {tchatList && tchatList.map((tchat) => 
                    //tchat[0] is the tchat's id
                    <Widget key={tchat[0]}>
                        <WidgetTchatTopic tchat={tchat}/>
                    </Widget>
                )}
                {!tchatList && <p className={style.message}>Cette catégorie est vide</p>}
                {isNoSearchResult && <p className={style.message}>Aucun résultat pour cette recherche</p>}
            </ol>
        </div>
    )
}

export default TchatList;