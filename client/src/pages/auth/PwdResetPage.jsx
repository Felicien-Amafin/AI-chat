import Form from "../../components/formUi/form/Form";
import LandingPage from "../landing/LandingPage";
import { useParams } from "react-router-dom";
import { useResetPassword } from "../../services/mutations";
import { trimAndLowerCase } from "../../utils";
import FormLink from "../../components/formUi/formLink/FormLink";

const form = {
  title: 'Réinitialisation',
  inputs: [{ label: 'Nouveau mot de passe', name: 'new_password', type: 'password', placeholder: 'Votre nouveau mot de passe', is_requied: true }],
  btn_text: 'Valider'
};

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
      <Form 
        onSubmit={handleSubmission}
        form={form}
        reqResult={reqResult}
      >
        <>
          {isTokenInvalid && 
            <FormLink path='/auth/password-recovery'>
              Mot de passe oublié ?
            </FormLink>
          }
          {data && 
            <FormLink path='/auth/sign-in'>
              Connexion
            </FormLink>
          } 
        </>
      </Form>
  </LandingPage>
  )
}

export default PwdResetPage;