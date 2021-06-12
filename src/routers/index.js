// Component
import Home from "../pages";
import About from "../pages/about";
// Routes
import RouteCourse from "../routers/course";

const Routes = [
    {
        path: ['/', '/home'],
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    ...RouteCourse,
]

export default Routes;