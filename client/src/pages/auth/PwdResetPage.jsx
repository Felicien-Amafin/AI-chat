import Form from "../../components/linkTo/formUi/Form";
import LandingPage from "../landing/LandingPage"
import style from "./auth.module.css";

const form = {
  title: 'Password reset',
  inputs: [{ label: 'New password', name: 'new_password', type: 'password', placeholder: 'Enter new password', is_requied: true }],
  btn_text: 'Validate'
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