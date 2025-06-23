import Form from "../../components/formUi/Form";
import LinkTo from "../../components/orthers/linkTo/LinkTo";
import LandingPage from "../landing/LandingPage";
import { useSignUpUser } from "../../services/mutations";
import { trimAndLowerCase } from "../../utils";
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
  const { mutate, isPending, isError, error, data } = useSignUpUser();

  const reqResult = { isPending, isError, error, data };

  const handleSubmission = (e, formData)=> {
    e.preventDefault();
    const newFormData = trimAndLowerCase(formData, ['username', 'email']);
  
    mutate(newFormData);
  }
  
  return (
    <LandingPage>
      <Form 
        onSubmit={handleSubmission}
        form={form}
        style={style}
        reqResult={reqResult}
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