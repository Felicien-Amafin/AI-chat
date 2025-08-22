import { Link } from "react-router-dom";
import style from "./header.module.css";

const Header = ({children}) => {
    return (
        <header className={`${style.header} flexRow-alignItems`}>
            <Link to='/' className={style.siteName}>Ai Chat</Link>
            {children}
        </header>
    )
}

export default Header;