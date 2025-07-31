import { useSignUpUser } from "../../services/mutations";
import { trimAndLowerCase } from "../../utils";
import LandingPage from "../landing/LandingPage";
import AuthForm from "./components/authForm/AuthForm";
import AuthFormLink from "./components/authFormLink/AuthFormLink";
import { signUpForm } from "./constant";

const SignUpPage = () => {
  const { mutate, isPending, isError, error, data } = useSignUpUser();
  const request = { isPending, isError, error, data };
  console.log(error)
  const handleSubmission = (e, formData)=> {
    e.preventDefault();
    const newFormData = trimAndLowerCase(formData, ['username', 'email']);
  
    mutate(newFormData);
  }
  
  return (
    <LandingPage>
      <AuthForm 
        onSubmit={handleSubmission}
        form={signUpForm}
        request={request}
      >
        <AuthFormLink path='/auth/sign-in'>
          Vous avez déjà un compte ? Se connecter
        </AuthFormLink>
      </AuthForm>
    </LandingPage>
  )
}

export default SignUpPage;