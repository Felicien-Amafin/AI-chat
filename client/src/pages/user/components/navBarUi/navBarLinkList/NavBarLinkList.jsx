import NavBarPageLink from '../navBarPageLink/NavBarPageLink';
import style from './navBarLinkList.module.css';

const NavBarLinkList = ({links}) => {
  return (
    <ul className={`${style.linkList} flex-column`}>
      {links.map((link)=> 
        <NavBarPageLink
          key={link.text}
          path={link.path}
          text={link.text}
        >
          {link.icon}
        </NavBarPageLink>)
      }
    </ul>
  )
}

export default NavBarLinkList;