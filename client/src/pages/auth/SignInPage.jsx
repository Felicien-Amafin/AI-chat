import AuthForm from "./components/authForm/AuthForm";
import AuthFormLink from "./components/authFormLink/AuthFormLink";
import LandingPage from "../landing/LandingPage";
import { useSignInUser } from "../../services/mutations";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { trimAndLowerCase } from "../../utils";
import { setUserCred } from "../../store/authSlice";
import { signInForm } from "./constant";

const link = {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px'
  }
};

const SignInPage = () => {
  const dispatch = useDispatch();
  const { mutate, isPending, isError, error, data } = useSignInUser();
  const reqResult = { isPending, isError, error, data };

  const handleSubmission = (e, formData)=> {
    e.preventDefault();
    const newFormData = trimAndLowerCase(formData, ['email']);
    
    mutate(newFormData);
  };

  useEffect(()=> {
    if (data) {
      dispatch(setUserCred(data.data)); //Setting accessToken + userId in store
    }
  }, [data, dispatch]);

  return (
    <LandingPage>
      <AuthForm 
        onSubmit={handleSubmission}
        form={signInForm}
        reqResult={reqResult}
      >
        <div style={link.style}>
          <AuthFormLink path='/auth/sign-up'>
            Vous n’avez pas encore de compte ? Inscription
          </AuthFormLink>
          <AuthFormLink path='/auth/password-recovery'>
            Mot de passe oublié ?
          </AuthFormLink>
        </div>
      </AuthForm>
    </LandingPage>
  )
}

export default SignInPage;