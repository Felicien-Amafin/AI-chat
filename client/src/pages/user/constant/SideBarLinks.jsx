import { BsChatRightText } from "react-icons/bs";
import { GrHome } from "react-icons/gr";

/* Side bar links */
export const homeSideBarLinks = [
    {
        path: '/user/chat-form',
        text: 'Nouveau chat',
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
        path: '/user/chat-form',
        text: 'Nouveau chat',
        icon: <BsChatRightText/>
    }
];

export const chatFormSideBarLinks = [
    {
        path: '/user',
        text: 'Accueil',
        icon: <GrHome/>
    },
]