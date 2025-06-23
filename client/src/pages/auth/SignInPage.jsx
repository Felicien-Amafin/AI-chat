import Form from "../../components/formUi/Form";
import LinkTo from "../../components/orthers/linkTo/LinkTo";
import LandingPage from "../landing/LandingPage"
import style from "./auth.module.css";

const form = {
  title: 'Connexion',
  inputs: [ 
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Votre addresse email', is_requied: true }, 
    { label: 'Mot de passe', name: 'password', type: 'password', placeholder: 'Votre mot de passe', is_requied: true } 
  ],
  btn_text: 'Se connecter',
};
const link = {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px'
  }
}
const SignInPage = () => {
  return (
    <LandingPage>
      <Form 
        form={form}
        style={style}
      >
        <div style={link.style}>
          <LinkTo 
            path='/auth/sign-up'
            className={style.link}
          >
            Vous n’avez pas encore de compte ? Inscription
          </LinkTo>
          <LinkTo 
            path='/auth/password-recovery'
            className={style.link}
          >
            Mot de passe oublié ?
          </LinkTo>
        </div>
      </Form>
    </LandingPage>
  )
}

export default SignInPage;