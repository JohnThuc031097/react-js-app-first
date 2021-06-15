// Pages
import { UserProfilePage } from "../pages/user";

const UserRoute = {
    UserProfileRoute: {
        auth: true,
        path: '/user/profile',
        pathAuth: '/auth/login',
        component: UserProfilePage
    }
};

export default UserRoute;