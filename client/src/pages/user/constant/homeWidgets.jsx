import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaLightbulb } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { BiSolidBookReader } from "react-icons/bi";

export const chatSuggestions = [
    {
        category: 'Carrière',
        title: 'Le mentorat',
        question: 'Donne-moi des conseils sur la manière de trouver un mentor',
        icon: {
            color: 'blue',
            element: <LuBriefcaseBusiness/>
        }
    },
    {
        category: 'Brainstorming',
        title: `Design d'un bureau`,
        question: `Comment décorer un bureau pour qu'il ait l'air plus confortable tout en restant professionnel ?`,
        icon: {
            color: 'purple',
            element: <FaLightbulb/>
        }
    },
    {
        category: 'Programmation',
        title: 'Les boucles en Python',
        question: `Comment parcourir une liste d'éléments en boucle en Python ?`,
        icon: {
            color: 'red',
            element: <FaCode/>
        }
    },
    {
        category: 'Apprentissage',
        title: `La chute de l'empire romain`,
        question: `Décris les facteurs qui ont provoqué la chute de l'Empire romain.`,
        icon: {
            color: 'pink',
            element: <BiSolidBookReader/>
        }
    },
]





