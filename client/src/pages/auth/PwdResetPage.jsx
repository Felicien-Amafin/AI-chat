import AuthForm from "./components/authForm/AuthForm";
import AuthFormLink from "./components/authFormLink/AuthFormLink";
import Landing from "../../layout/landing/Landing";
import { useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../services/mutations";
import { pwdResetForm } from "./constant";

const PwdResetPage = () => {
  const { mutate, isPending, isError, error, data } = useResetPasswordMutation();
  const params = useParams();
  const token = params.token;
  const request = { isPending, isError, error, data };
  const isTokenInvalid = error ? error.response.data.errors?.isTokenInvalid : false;

  const handleSubmission = (e, formData)=> {
    e.preventDefault();
    
    mutate({ token , data:formData });
  };

  return (
    <Landing>
      <AuthForm 
        onSubmit={handleSubmission}
        form={pwdResetForm}
        request={request}
      >
        <>
          {isTokenInvalid && 
            <AuthFormLink path='/auth/password-recovery'>
              Obtenir un nouveau lien
            </AuthFormLink>
          }
          {data && 
            <AuthFormLink path='/auth/sign-in'>
              Connexion
            </AuthFormLink>
          } 
        </>
      </AuthForm>
    </Landing>
  )
}

export default PwdResetPage;