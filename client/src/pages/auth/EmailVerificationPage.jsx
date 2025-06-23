import Form from "../../components/formUi/Form";
import LandingPage from "../landing/LandingPage";
import LinkTo from "../../components/orthers/linkTo/LinkTo";
import style from "./auth.module.css";

const form = {
  title: "Vérification d'email",
  inputs: [{ label: 'Code de vérification', name: 'code', type: 'text', placeholder: 'votre code de vérification', is_requied: true }],
  btn_text: 'Validate'
};

const EmailVerificationPage = () => {
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
            Sign in
        </LinkTo>
      </Form>
    </LandingPage>
  )
}

export default EmailVerificationPage;