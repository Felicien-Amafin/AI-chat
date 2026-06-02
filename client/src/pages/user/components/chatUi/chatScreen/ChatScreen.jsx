import Loader from '../../../../../components/others/Loader';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Importer le plugin GFM
import style from './chatScreen.module.css';

const ChatScreen = ({userQuestion, aiAnswer, isPending, isError, errorMessage }) => {
    const defaultMess =  'Comment puis-je vous aider?';
   
    return (
        <div className={style.chatScreen}>
            <section className={`${style.chat} gradientScroll flex-column`}>
                {!userQuestion && 
                    <div className={`${style.defaultMess} flexColumn-allCentered`}>{defaultMess}</div>
                }
                {userQuestion && 
                    <p className={style.userQuestion}>{userQuestion}</p>
                }
                {(!isPending && aiAnswer) && 
                    <div className={style.aiAnswer}>
                        <ReactMarkdown
                            children={aiAnswer} 
                            remarkPlugins={[remarkGfm]} 
                            components={{
                                p:    ({_, ...props}) => <p className={style.md_p} {...props} />,
                                h1:   ({_, ...props}) => <h1 className={style.md_h1}{...props} />,
                                h2:   ({_, ...props}) => <h2 className={style.md_h2} {...props} />,
                                h3:   ({_, ...props}) => <h3 className={style.md_h3} {...props} />,
                                ul:   ({_, ...props}) => <ul className={style.md_ul} {...props} />,
                                ol:   ({_, ...props}) => <ol className={style.md_ol} {...props} />, 
                                li:   ({_, ...props}) => <li className={style.md_li} {...props} />,
                                table:({_, ...props}) => <table className={style.md_table} {...props} />,
                                code: ({_, ...props}) => <code className={style.md_code} {...props} />, 
                            }}
                        />
                    </div>
                }
                {isError && <p className={`${style.serverError} error`}>{errorMessage}</p>}
                {isPending && 
                    <div className={`${style.waiting} flexRow-allCentered`}>
                        <Loader size={25} color='white'/> <p className={style.waitingMess}>Un instant...</p>
                    </div>
                }
            </section>
        </div>
    )
}

export default ChatScreen;