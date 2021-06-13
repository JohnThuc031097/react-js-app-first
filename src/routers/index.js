// Pages
import HomePage from "../pages";
import AboutPage from "../pages/about";
// Routes
import AuthRoute from "../routers/auth";
import CourseRoute from "../routers/course";

const Routes = {
    Default: {
        path: ['/', '/home'],
        component: HomePage
    },
    AboutRoute: {
        path: '/about',
        component: AboutPage
    },
    ...AuthRoute,
    ...CourseRoute,
}

export default Routes;