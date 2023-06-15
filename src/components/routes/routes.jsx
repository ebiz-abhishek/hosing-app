import Notification from "../pages/notification";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";

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
        path: "/profile",
        component: <Profile title="Dashboard" />
    },
    {
        path: "/notification",
        component: <Notification title="Dashboard" />
    },
   
 
]

export default routes;