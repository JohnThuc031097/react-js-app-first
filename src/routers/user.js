// Pages
import { UserProfilePage } from "../pages/user";

const UserRoute = {
    UserProfileRoute: {
        path: '/user/profile',
        noAuthToPath: '/auth/login',
        component: UserProfilePage
    }
};

export default UserRoute;