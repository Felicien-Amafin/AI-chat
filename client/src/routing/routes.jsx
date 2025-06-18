import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import EmailVerificationPage from "../pages/auth/EmailVerificationPage";
import PwdRecoveryPage from "../pages/auth/PwdRecoveryPage";
import PwdResetPage from "../pages/auth/PwdResetPage";

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