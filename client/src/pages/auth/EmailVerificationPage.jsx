import Form from "../../components/linkTo/formUi/Form";
import LandingPage from "../landing/LandingPage";
import LinkTo from "../../components/linkTo/LinkTo";
import style from "./auth.module.css";

const form = {
  title: 'Email verification',
  inputs: [{ label: 'Code', name: 'code', type: 'text', placeholder: 'Enter verification code', is_requied: true }],
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