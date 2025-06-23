import Form from "../../components/formUi/Form";
import LandingPage from "../landing/LandingPage"
import style from "./auth.module.css";

const form = {
  title: 'Mot de passe oublié',
  inputs: [{ label: 'Email', name: 'email', type: 'email', placeholder: 'Votre addresse email', is_requied: true }],
  btn_text: 'Envoi du lien'
};

const PwdRecoveryPage = () => {
  return (
     <LandingPage>
      <Form 
        form={form}
        style={style}
      />
    </LandingPage>
  )
}

export default PwdRecoveryPage;