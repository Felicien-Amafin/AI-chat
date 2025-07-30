import AuthForm from "./components/authForm/AuthForm";
import AuthFormLink from "./components/authFormLink/AuthFormLink";
import LandingPage from "../landing/LandingPage";
import { useParams } from "react-router-dom";
import { useResetPassword } from "../../services/mutations";
import { trimAndLowerCase } from "../../utils";
import { pwdResetForm } from "./constant";

const PwdResetPage = () => {
  const { mutate, isPending, isError, error, data } = useResetPassword();
  const params = useParams();
  const token = params.token;
  const reqResult = { isPending, isError, error, data };
  const isTokenInvalid = error ? error.response.data.errors.isTokenInvalid : false;

  const handleSubmission = (e, formData)=> {
    e.preventDefault();

    const newFormData = trimAndLowerCase(formData);
    mutate({ token , data:newFormData });
  };

  return (
    <LandingPage>
      <AuthForm 
        onSubmit={handleSubmission}
        form={pwdResetForm}
        reqResult={reqResult}
      >
        <>
          {isTokenInvalid && 
            <AuthFormLink path='/auth/password-recovery'>
              Mot de passe oublié ?
            </AuthFormLink>
          }
          {data && 
            <AuthFormLink path='/auth/sign-in'>
              Connexion
            </AuthFormLink>
          } 
        </>
      </AuthForm>
  </LandingPage>
  )
}

export default PwdResetPage;