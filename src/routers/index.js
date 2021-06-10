// Component
import Home from "../pages";
import About from "../pages/about";

// Routes
import CourseRoute from "./course";

const Routes = [
    {
        path: ['/', '/home'],
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    CourseRoute
]

export default Routes;