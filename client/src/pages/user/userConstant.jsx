import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaLightbulb } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { BiSolidBookReader } from "react-icons/bi";
import { BsChatRightText } from "react-icons/bs";
import { GrHome } from "react-icons/gr";

/* User home page */
export const tchatSuggestions = [
    {
        title: 'Carrière',
        query: 'Donne-moi des conseiles sur la mannière de trouver un mentor.',
        icon: {
            color: 'blue',
            element: <LuBriefcaseBusiness/>
        }
    },
    {
        title: 'Brainstorming',
        query: `Comment décorer un bureau pour qu'il ait l'air plus confortable tout en restant professionnel ?`,
        icon: {
            color: 'purple',
            element: <FaLightbulb/>
        }
    },
    {
        title: 'Code',
        query: `Comment parcourir une liste d'éléments en boucle en Python ?`,
        icon: {
            color: 'red',
            element: <FaCode/>
        }
    },
    {
        title: 'Apprentissage',
        query: `Décris les facteurs qui ont provoqué la chute de l'Empire romain.`,
        icon: {
            color: 'pink',
            element: <BiSolidBookReader/>
        }
    },

]

/* Side bar options */
export const homeLinks = [
    {
        path: '/user/new-tchat',
        text: 'Nouveau tchat',
        icon: <BsChatRightText/>
    }
]

export const genericLinks = [
    {
        path: '/user',
        text: 'Accueil',
        icon: <GrHome/>
    },
    {
        path: '/user/new-tchat',
        text: 'Nouveau tchat',
        icon: <BsChatRightText/>
    }
];

export const newTchatLinks = [
    {
        path: '/user',
        text: 'Accueil',
        icon: <GrHome/>
    },
]

/* New tchat page */
export const formNewTchat = {
    title: {
        label: 'Titre du tchat', 
        name: 'tchat-title', 
        type: 'text', 
        placeholder: 'Ex: les aurores boréales', 
        is_requied: true 
    },
    categorie: {
        label: 'Nom de la catégorie', 
        name: 'tchat-categorie', 
        type: 'text', 
        placeholder: 'Ex: Nature', 
        is_requied: true 
    }
};

