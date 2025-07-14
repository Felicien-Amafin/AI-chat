import { BsChatRightText } from "react-icons/bs";
import { GrHome } from "react-icons/gr";

/* Side bar links */
export const homeSideBarLinks = [
    {
        path: '/user/tchat-form',
        text: 'Nouveau tchat',
        icon: <BsChatRightText/>
    }
]

export const allSideBarLinks = [
    {
        path: '/user',
        text: 'Accueil',
        icon: <GrHome/>
    },
    {
        path: '/user/tchat-form',
        text: 'Nouveau tchat',
        icon: <BsChatRightText/>
    }
];

export const tchatFormSideBarLinks = [
    {
        path: '/user',
        text: 'Accueil',
        icon: <GrHome/>
    },
]