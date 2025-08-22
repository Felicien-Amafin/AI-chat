import AuthForm from "./components/authForm/AuthForm";
import AuthFormLink from "./components/authFormLink/AuthFormLink";
import Landing from "../../layout/landing/Landing";
import { useEmailVerificationMutation } from "../../services/mutations";
import { useParams } from "react-router-dom";
import { trimAndLowerCase } from "../../utils";
import { emailVerificationForm } from "./constant";

const EmailVerificationPage = () => {
  const { mutate, isPending, isError, error, data } = useEmailVerificationMutation();
  const params = useParams();
  const userId = params.userId; 
  const request = { isPending, isError, error, data };

  const handleSubmission = (e, formData)=> {
    e.preventDefault();

    const newFormData = trimAndLowerCase(formData);
    mutate({userId, data:newFormData});
  }

  return (
     <Landing>
      <AuthForm 
        onSubmit={handleSubmission}
        form={emailVerificationForm}
        request={request}
      >
        {data && 
          <AuthFormLink path='/auth/sign-in'>
            Se connecter
          </AuthFormLink>
        }
      </AuthForm>
    </Landing>
  )
}

export default EmailVerificationPage;