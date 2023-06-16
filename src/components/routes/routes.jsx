import Notification from "../pages/userform";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/userlist";

// import ErrorPage from "../pages/view/ErrorPage";
const routes = [
    {
        path: "/",
        component: <Dashboard title="Dashboard" />
    },
    {
        path: "/dashboard",
        component: <Dashboard title="Dashboard" />
    },
    {
        path: "/user",
        component: <Profile title="Dashboard" />
    },
    {
        path: "/user-form",
        component: <Notification title="Dashboard" />
    },
   
 
]

export default routes;