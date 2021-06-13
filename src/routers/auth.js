// Pages
import { LoginPage, RegisterPage } from "../pages/auth";

const AuthRoute = {
    LoginRoute: {
        path: '/auth/login',
        component: LoginPage
    },
    RegisterRoute: {
        path: '/auth/register',
        component: RegisterPage
    }
};

export default AuthRoute;