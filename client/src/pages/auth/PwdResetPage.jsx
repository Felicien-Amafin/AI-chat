import Form from "../../components/linkTo/formUi/Form";
import LandingPage from "../landing/LandingPage"
import style from "./auth.module.css";

const form = {
  title: 'Réinitialisation',
  inputs: [{ label: 'Nouveau mot de passe', name: 'new_password', type: 'password', placeholder: 'Votre nouveau mot de passe', is_requied: true }],
  btn_text: 'Valider'
};

const PwdResetPage = () => {
  return (
    <LandingPage>
      <Form 
        form={form}
        style={style}
      />
  </LandingPage>
  )
}

export default PwdResetPage;