import Form from "../../components/linkTo/formUi/Form";
import LandingPage from "../landing/LandingPage"
import style from "./auth.module.css";

const form = {
  title: 'Password Recovery',
  inputs: [{ label: 'Email', name: 'email', type: 'email', placeholder: 'Your email address', is_requied: true }],
  btn_text: 'Send recovery mail'
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