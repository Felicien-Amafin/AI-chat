import AuthForm from "./components/authForm/AuthForm";
import LandingPage from "../landing/LandingPage";
import { useSendResetEmail } from "../../services/mutations";
import { trimAndLowerCase } from "../../utils";
import { pwdRecoveryForm } from "./constant";

const PwdRecoveryPage = () => {
  const { mutate, isPending, isError, error, data } = useSendResetEmail();
  const reqResult = { isPending, isError, error, data };

  const handleSubmission = (e, formData)=> {
      e.preventDefault();
  
      const newFormData = trimAndLowerCase(formData);
      mutate(newFormData);
  }

  return (
     <LandingPage>
      <AuthForm 
        onSubmit={handleSubmission}
        form={pwdRecoveryForm}
        reqResult={reqResult}
      />
    </LandingPage>
  )
}

export default PwdRecoveryPage;