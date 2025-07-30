import AuthForm from "./components/authForm/AuthForm";
import AuthFormLink from "./components/authFormLink/AuthFormLink";
import LandingPage from "../landing/LandingPage";
import { useEmailVerification } from "../../services/mutations";
import { useParams } from "react-router-dom";
import { trimAndLowerCase } from "../../utils";
import { emailVerificationForm } from "./constant";

const EmailVerificationPage = () => {
  const { mutate, isPending, isError, error, data } = useEmailVerification();
  const params = useParams();
  const userId = params.userId; 
  const reqResult = { isPending, isError, error, data };

  const handleSubmission = (e, formData)=> {
    e.preventDefault();

    const newFormData = trimAndLowerCase(formData);
    mutate({userId, data:newFormData});
  }

  return (
     <LandingPage>
      <AuthForm 
        onSubmit={handleSubmission}
        form={emailVerificationForm}
        reqResult={reqResult}
      >
        {data && 
          <AuthFormLink path='/auth/sign-in'>
            Sign in
          </AuthFormLink>
        }
      </AuthForm>
    </LandingPage>
  )
}

export default EmailVerificationPage;