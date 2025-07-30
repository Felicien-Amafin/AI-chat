export const signUpForm = {
  title: 'Inscription',
  inputs: [ 
    { label: "Nom d'utilisateur", name: 'username', type: 'text', placeholder: "Votre nom d'utilisateur", is_requied: true }, 
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Votre addresse email', is_requied: true }, 
    { label: 'Mot de passe', name: 'password', type: 'password', placeholder: 'Votre mot de passe', is_requied: true } 
  ],
  btn_text: "S'inscrire"
};

export const signInForm = {
  title: 'Connexion',
  inputs: [ 
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Votre addresse email', is_requied: true }, 
    { label: 'Mot de passe', name: 'password', type: 'password', placeholder: 'Votre mot de passe', is_requied: true } 
  ],
  btn_text: 'Se connecter',
};

export const pwdResetForm = {
  title: 'Réinitialisation',
  inputs: [{ label: 'Nouveau mot de passe', name: 'new_password', type: 'password', placeholder: 'Votre nouveau mot de passe', is_requied: true }],
  btn_text: 'Valider'
};

export const pwdRecoveryForm = {
  title: 'Mot de passe oublié',
  inputs: [{ label: 'Email', name: 'email', type: 'email', placeholder: 'Votre addresse email', is_requied: true }],
  btn_text: 'Envoi du lien'
};

export const emailVerificationForm = {
  title: "Vérification d'email",
  inputs: [{ label: 'Code de vérification', name: 'code', type: 'text', placeholder: 'votre code de vérification', is_requied: true }],
  btn_text: 'Validate'
};