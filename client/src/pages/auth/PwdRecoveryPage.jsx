import Form from "../../components/formUi/Form";
import LandingPage from "../landing/LandingPage";
import { useSendResetEmail } from "../../services/mutations";
import { trimAndLowerCase } from "../../utils";
import style from "./auth.module.css";

const form = {
  title: 'Mot de passe oublié',
  inputs: [{ label: 'Email', name: 'email', type: 'email', placeholder: 'Votre addresse email', is_requied: true }],
  btn_text: 'Envoi du lien'
};

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
      <Form 
        onSubmit={handleSubmission}
        form={form}
        style={style}
        reqResult={reqResult}
      />
    </LandingPage>
  )
}

export default PwdRecoveryPage;