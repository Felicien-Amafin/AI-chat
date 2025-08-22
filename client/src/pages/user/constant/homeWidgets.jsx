import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaLightbulb } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { BiSolidBookReader } from "react-icons/bi";

export const chatSuggestions = [
    {
        title: 'Carrière',
        query: 'Donne-moi des conseils sur la manière de trouver un mentor',
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





