import { useSignUpUserMutation } from "../../services/mutations";
import { trimAndLowerCase } from "../../utils";
import Landing from "../../layout/landing/Landing";
import AuthForm from "./components/authForm/AuthForm";
import AuthFormLink from "./components/authFormLink/AuthFormLink";
import { signUpForm } from "./constant";

const SignUpPage = () => {
  const { mutate, isPending, isError, error, data } = useSignUpUserMutation();
  const request = { isPending, isError, error, data };
 
  const handleSubmission = (e, formData)=> {
    e.preventDefault();
    const newFormData = trimAndLowerCase(formData, ['username', 'email']);
  
    mutate(newFormData);
  }
  
  return (
    <Landing>
      <AuthForm 
        onSubmit={handleSubmission}
        form={signUpForm}
        request={request}
      >
        <AuthFormLink path='/auth/sign-in'>
          Vous avez déjà un compte ? Se connecter
        </AuthFormLink>
      </AuthForm>
    </Landing>
  )
}

export default SignUpPage;