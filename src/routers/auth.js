// Services
import { PageServices } from "../services";

const AuthRoute = {
    AuthLoginRoute: {
        auth: true,
        exception: true,
        path: '/auth/login',
        component: PageServices.Auth.AuthLoginPage
    },
    AuthRegisterRoute: {
        auth: true,
        exception: true,
        path: '/auth/register',
        component: PageServices.Auth.AuthRegisterPage
    }
};

export default AuthRoute;