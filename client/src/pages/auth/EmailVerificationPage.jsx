import Form from "../../components/formUi/Form";
import LandingPage from "../landing/LandingPage";
import LinkTo from "../../components/orthers/linkTo/LinkTo";
import { useEmailVerification } from "../../services/mutations";
import { useParams } from "react-router-dom";
import { trimAndLowerCase } from "../../utils";
import style from "./auth.module.css";

const form = {
  title: "Vérification d'email",
  inputs: [{ label: 'Code de vérification', name: 'code', type: 'text', placeholder: 'votre code de vérification', is_requied: true }],
  btn_text: 'Validate'
};

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
      <Form 
        onSubmit={handleSubmission}
        form={form}
        style={style}
        reqResult={reqResult}
      >
        {data && <LinkTo 
          path='/auth/sign-in'
          className={style.link}
        >
            Sign in
        </LinkTo>}
      </Form>
    </LandingPage>
  )
}

export default EmailVerificationPage;