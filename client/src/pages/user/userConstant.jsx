import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaLightbulb } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { BiSolidBookReader } from "react-icons/bi";

export const tchatSuggestions = [
    {
        title: 'Carrière',
        query: 'Donne-moi des conseiles sur la mannière de trouver un mentor.',
        icon: <LuBriefcaseBusiness />
    },
    {
        title: 'Brainstorming',
        query: `Comment décorer un bureau pour qu'il ait l'air plus confortable tout en restant professionnel ?`,
        icon: <FaLightbulb/>
    },
    {
        title: 'Code',
        query: `Comment parcourir une liste d'éléments en boucle en Python ?`,
        icon: <FaCode />
    },
    {
        title: 'Apprentissage',
        query: `Décris les facteurs qui ont provoqué la chute de l'Empire romain.`,
        icon: <BiSolidBookReader />
    },

]

