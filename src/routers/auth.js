// Pages
import { AuthLoginPage, AuthRegisterPage } from "../pages/auth";

const AuthRoute = {
    AuthLoginRoute: {
        auth: true,
        exception: true,
        path: '/auth/login',
        component: AuthLoginPage
    },
    AuthRegisterRoute: {
        auth: true,
        exception: true,
        path: '/auth/register',
        component: AuthRegisterPage
    }
};

export default AuthRoute;