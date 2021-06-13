// Pages
import HomePage from "../pages";
import AboutPage from "../pages/about";
// Routes
import AuthRoute from "../routers/auth";
import UserRoute from "../routers/user";
import CourseRoute from "../routers/course";

const Routes = {
    IndexRoute: {
        path: ['/', '/home'],
        component: HomePage
    },
    AboutRoute: {
        path: '/about',
        component: AboutPage
    },
    ...AuthRoute,
    ...UserRoute,
    ...CourseRoute,
}

export default Routes;