// Services
import { PageServices } from "../services";

const UserRoute = {
    UserProfileRoute: {
        auth: true,
        path: '/user/profile',
        pathAuth: '/auth/login',
        component: PageServices.User.UserProfilePage
    }
};

export default UserRoute;