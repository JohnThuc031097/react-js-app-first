import Course from "../pages/course";
import CourseReviewFree from "../pages/course/review/free";
import CourseReviewFee from "../pages/course/review/fee";

const CourseRoute = [
    {
        path: '/courses',
        component: Course,
        routes: [/* Login -> Courses of user */]
    },
    {
        path: '/courses/review/free',
        component: CourseReviewFree,
    },
    {
        path: '/courses/review/fee',
        component: CourseReviewFee,
    }
]

export default CourseRoute;