// Services
import { PageServices } from "../services";
// Routes
import AuthRoute from "./auth";
import UserRoute from "./user";

export const Routes = {
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