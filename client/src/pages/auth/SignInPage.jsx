import Form from "../../components/linkTo/formUi/Form";
import LinkTo from "../../components/linkTo/LinkTo";
import LandingPage from "../landing/LandingPage"
import style from "./auth.module.css";

const form = {
  title: 'Sign in',
  inputs: [ 
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Your email address', is_requied: true }, 
    { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter password', is_requied: true } 
  ],
  btn_text: 'Sign in',
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
            Don't have an account ? Sign up
          </LinkTo>
          <LinkTo 
            path='/auth/password-recovery'
            className={style.link}
          >
            Password forgotten ?
          </LinkTo>
        </div>
      </Form>
    </LandingPage>
  )
}

export default SignInPage;