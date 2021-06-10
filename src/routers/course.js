import Courses from "../pages/courses";
import CoursesFree from "../pages/courses/components/courses-free";
import CoursesFee from "../pages/courses/components/courses-fee";

const CourseRoute = {
    path: '/courses',
    component: Courses,
    routesChild: [
        {
            path: '/courses/free',
            component: CoursesFree
        },
        {
            path: '/courses/fee',
            component: CoursesFee
        }
    ]
}

export default CourseRoute;