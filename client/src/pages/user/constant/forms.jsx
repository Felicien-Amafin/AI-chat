/* TchatFormPage */
export const formNewCategorie = [
    {
        label: 'Nom de la catégorie', 
        name: 'tchat-categorie', 
        type: 'text', 
        placeholder: 'Ex: Nature', 
        is_requied: true 
    },
    {
        label: 'Titre du tchat', 
        name: 'tchat-title', 
        type: 'text', 
        placeholder: 'Ex: les aurores boréales', 
        is_requied: true 
    }
];

export const formExistingCategories = {
    input: {
        label: 'Titre du tchat', 
        name: 'tchat-title', 
        type: 'text', 
        placeholder: 'Ex: les aurores boréales', 
        is_requied: true 
    },
    select: {
        options: [
            { value: 'finance', label: 'Finance' },
            { value: 'histoire', label: 'Histoire' },
            { value: 'actualité', label: 'Actualité' },
        ],
        styles: {
            control: (baseStyles, state) => ({
                ...baseStyles,
                height: '40px',
                cursor: state.isFocused ? 'text' : 'pointer',
                fontSize: '0.75rem',
                backgroundColor: 'transparent',
            }),
            placeholder: (baseStyles) => ({
                ...baseStyles,
                fontSize: '0.75rem',
                color: 'lightGray',
            }),
            menuList: (baseStyles) => ({
                ...baseStyles,
                height: '170px'
            }),
            option: (baseStyles) => ({
                ...baseStyles,
                fontSize: '0.75rem',
                cursor: 'pointer',
                color: 'var(--darkBlue)'
                
            }),
            singleValue: (baseStyles) => ({
                ...baseStyles,
                color: 'white'
            }),
            input: (baseStyles) => ({
                ...baseStyles,
                color: 'white'
            }),

        }
    }
}
