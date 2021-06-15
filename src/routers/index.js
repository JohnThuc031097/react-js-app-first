// Services
import { PageServices } from "../services";
// Routes
import AuthRoute from "./auth";
import UserRoute from "./user";

const Routes = {
    IndexRoute: {
        path: ['/', '/home'],
        component: PageServices.HomePage
    },
    AboutRoute: {
        path: '/about',
        component: PageServices.AboutPage
    },
    ...AuthRoute,
    ...UserRoute,
}

export default Routes;