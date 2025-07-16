import Form from "../../components/formUi/form/Form";
import FormLink from "../../components/formUi/formLink/FormLink";
import LandingPage from "../landing/LandingPage";
import { useSignInUser } from "../../services/mutations";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { trimAndLowerCase } from "../../utils";
import { setUserCred } from "../../store/authSlice";

const form = {
  title: 'Connexion',
  inputs: [ 
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Votre addresse email', is_requied: true }, 
    { label: 'Mot de passe', name: 'password', type: 'password', placeholder: 'Votre mot de passe', is_requied: true } 
  ],
  btn_text: 'Se connecter',
};

const link = {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px'
  }
};

const SignInPage = () => {
  const { mutate, isPending, isError, error, data } = useSignInUser();
  const dispatch = useDispatch();
  const reqResult = { isPending, isError, error, data };

  const handleSubmission = (e, formData)=> {
    e.preventDefault();
    const newFormData = trimAndLowerCase(formData, ['email']);
    
    mutate(newFormData);
  };

  useEffect(()=> {
    if (data) {
      //Store user in local storage to avoid app restart when user refreshes page
      localStorage.setItem('user', JSON.stringify(data.data.user));
      dispatch(setUserCred(data.data));
    }
  });

  return (
    <LandingPage>
      <Form 
        onSubmit={handleSubmission}
        form={form}
        reqResult={reqResult}
      >
        <div style={link.style}>
          <FormLink path='/auth/sign-up'>
            Vous n’avez pas encore de compte ? Inscription
          </FormLink>
          <FormLink path='/auth/password-recovery'>
            Mot de passe oublié ?
          </FormLink>
        </div>
      </Form>
    </LandingPage>
  )
}

export default SignInPage;