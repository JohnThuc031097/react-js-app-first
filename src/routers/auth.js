// Pages
import { AuthLoginPage, AuthRegisterPage } from "../pages/auth";

const AuthRoute = {
    AuthLoginRoute: {
        path: '/auth/login',
        component: AuthLoginPage
    },
    AuthRegisterRoute: {
        path: '/auth/register',
        component: AuthRegisterPage
    }
};

export default AuthRoute;