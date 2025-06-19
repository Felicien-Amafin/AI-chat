import Form from "../../components/linkTo/formUi/Form";
import LinkTo from "../../components/linkTo/LinkTo";
import LandingPage from "../landing/LandingPage"
import style from "./auth.module.css";

const form = {
  title: 'Inscription',
  inputs: [ 
    { label: "Nom d'utilisateur", name: 'username', type: 'text', placeholder: "Votre nom d'utilisateur", is_requied: true }, 
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Votre addresse email', is_requied: true }, 
    { label: 'Mot de passe', name: 'password', type: 'password', placeholder: 'Votre mot de passe', is_requied: true } 
  ],
  btn_text: "S'inscrire"
};

const SignUpPage = () => {

  return (
    <LandingPage>
      <Form 
        form={form}
        style={style}
      >
        <LinkTo 
          path='/auth/sign-in'
          className={style.link}
        >
          Vous avez déjà un compte ? Se connecter
        </LinkTo>
      </Form>
    </LandingPage>
  )
}

export default SignUpPage;