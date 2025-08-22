import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import EmailVerificationPage from "../pages/auth/EmailVerificationPage";
import PwdRecoveryPage from "../pages/auth/PwdRecoveryPage";
import PwdResetPage from "../pages/auth/PwdResetPage";
import UserHomePage from "../pages/user/pages/userHomePage/UserHomePage";
import ChatFormPage from "../pages/user/pages/ChatFormPage";
import CategoryPage from "../pages/user/pages/categoryPage/CategoryPage";
import ChatPage from "../pages/user/pages/ChatPage";

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
        path: 'chat-form',
        element: <ChatFormPage/>
    },
    {
        path: 'chat/:chatId',
        element: <ChatPage/>
    },
    {
        path: 'categories/:categoryName',
        element: <CategoryPage/>
    },
];