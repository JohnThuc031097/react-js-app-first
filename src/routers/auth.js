// Pages
import { LoginPage, RegisterPage } from "../pages/auth";

const AuthRoute = [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
];

export default AuthRoute;