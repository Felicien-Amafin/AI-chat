import Loader from '../../../../../components/others/Loader';
import style from './tchatScreen.module.css';

const TchatScreen = ({userQuestion, aiAnswer, isPending, isServerError, serverError }) => {
    const defaultMess =  'Comment puis-je vous aider?';

    return (
        <div className={style.tchatScreen}>
            <section className={`${style.tchat} gradientScroll flex-column`}>
                {!userQuestion && 
                    <div className={`${style.defaultMess} flexColumn-allCentered`}>{defaultMess}</div>
                }
                {userQuestion && 
                    <p className={style.userQuestion}>{userQuestion}</p>
                }
                {(!isPending && aiAnswer) && <p className={style.aiAnswer}>{aiAnswer}</p>}
                {isServerError && <p className={`${style.serverError} error`}>{serverError}</p>}
                {isPending && 
                    <div className={`${style.waiting} flexRow-allCentered`}>
                    <Loader size={25} color='white'/> <p className={style.waitingMess}>Un instant...</p>
                    </div>
                }
            </section>
        </div>
    )
}

export default TchatScreen;