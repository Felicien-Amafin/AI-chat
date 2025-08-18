import AuthForm from "./components/authForm/AuthForm";
import AuthFormLink from "./components/authFormLink/AuthFormLink";
import Landing from "../../layout/landing/Landing";
import { useEmailVerification } from "../../services/mutations";
import { useParams } from "react-router-dom";
import { trimAndLowerCase } from "../../utils";
import { emailVerificationForm } from "./constant";

const EmailVerificationPage = () => {
  const { mutate, isPending, isError, error, data } = useEmailVerification();
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
            Sign in
          </AuthFormLink>
        }
      </AuthForm>
    </Landing>
  )
}

export default EmailVerificationPage;