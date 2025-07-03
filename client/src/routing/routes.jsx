import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import EmailVerificationPage from "../pages/auth/EmailVerificationPage";
import PwdRecoveryPage from "../pages/auth/PwdRecoveryPage";
import PwdResetPage from "../pages/auth/PwdResetPage";
import UserHomePage from "../pages/user/pages/userHomePage/UserHomePage";
import NewTchatPage from "../pages/user/pages/newTchatPage/NewTchatPage";
import CategoriePage from "../pages/user/pages/categoriePage/CategoriePage";

export const authRoutes = [
    {
        path: 'sign-in',
        element: <SignInPage/>
    },
    {
        path: 'sign-up',
        element: <SignUpPage/>
    },
    {
        path: 'email-verification/:userId',
        element: <EmailVerificationPage/>
    },
    {
        path: 'password-recovery',
        element: <PwdRecoveryPage/>
    },
    {
        path: 'password-reset/:token',
        element: <PwdResetPage/>
    },
];

export const userRoutes = [
    {
        path: '',
        element: <UserHomePage/>
    },
    {
        path: 'new-tchat',
        element: <NewTchatPage/>
    },
    /* {
        path: 'tchat/:tchatId',
        element: <TchatPage/>
    }, */
    {
        path: 'categories/:categorieName',
        element: <CategoriePage/>
    },
];