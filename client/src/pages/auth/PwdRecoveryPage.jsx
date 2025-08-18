import AuthForm from "./components/authForm/AuthForm";
import Landing from "../../layout/landing/Landing";
import { useSendResetEmail } from "../../services/mutations";
import { trimAndLowerCase } from "../../utils";
import { pwdRecoveryForm } from "./constant";

const PwdRecoveryPage = () => {
  const { mutate, isPending, isError, error, data } = useSendResetEmail();
  const request = { isPending, isError, error, data };

  const handleSubmission = (e, formData)=> {
      e.preventDefault();
  
      const newFormData = trimAndLowerCase(formData);
      mutate(newFormData);
  }

  return (
     <Landing>
      <AuthForm 
        onSubmit={handleSubmission}
        form={pwdRecoveryForm}
        request={request}
      />
    </Landing>
  )
}

export default PwdRecoveryPage;