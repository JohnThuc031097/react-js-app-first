// Pages
import HomePage from "../pages";
import AboutPage from "../pages/about";
// Routes
import AuthRoute from "../routers/auth";
import CourseRoute from "../routers/course";

const Routes = [
    {
        path: ['/', '/home'],
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    ...AuthRoute,
    ...CourseRoute,
]

export default Routes;