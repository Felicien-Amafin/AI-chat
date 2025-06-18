import Form from "../../components/linkTo/formUi/Form";
import LinkTo from "../../components/linkTo/LinkTo";
import LandingPage from "../landing/LandingPage"
import style from "./auth.module.css";

const form = {
  title: 'Sign up',
  inputs: [ 
    { label: 'Username', name: 'username', type: 'text', placeholder: 'Enter username', is_requied: true }, 
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Your email address', is_requied: true }, 
    { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter password', is_requied: true } 
  ],
  btn_text: 'Subscribe'
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
            Already have an account ? Sign in
        </LinkTo>
      </Form>
    </LandingPage>
  )
}

export default SignUpPage;