import LinkTo from "../../../../components/orthers/linkTo/LinkTo";
import style from "./header.module.css";

const Header = () => {
    return (
        <header className={`${style.header} flexRow-alignItems`}>
            <LinkTo path='/' className={style.siteName}>Ai tchat</LinkTo>
            <LinkTo path='/auth/sign-in' className={`${style.connexion} button`}>Connexion</LinkTo>
        </header>
    )
}

export default Header;