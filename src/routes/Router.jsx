import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import FindPartners from "../pages/FindPartners";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyConnections from "../pages/MyConnections";
import CreatePartnerProfile from "../pages/CreatePartnerProfile";
import DetailsPage from "../pages/DetailsPage";
import Profile from "../pages/Profile";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../pages/ErrorPage";
import Resources from "../pages/Resources";
import AboutUs from "../pages/AboutUs";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('https://studymate-project-server.vercel.app/topPartners')
            },
            {
                path: '/findPartners',
                Component: FindPartners,
            },
            {
                path: '/resources',
                Component: Resources,
            },
            {
                path: '/aboutUs',
                Component: AboutUs,
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/myConnections',
                element: <PrivateRouter>
                    <MyConnections></MyConnections>
                </PrivateRouter>
            },
            {
                path: '/createPartnerProfile',
                element: <PrivateRouter>
                    <CreatePartnerProfile></CreatePartnerProfile>
                </PrivateRouter>
            },
            {
                path: '/DetailsPage/:id',
                element: <DetailsPage></DetailsPage>
            },

            {
                path: "/*",
                Component: ErrorPage,
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouter>
            <DashboardLayout></DashboardLayout>
        </PrivateRouter>,
        children: [
            {
                path: '/dashboard/profile',
                element: <PrivateRouter>
                    <Profile></Profile>
                </PrivateRouter>
            },

        ]
    }
])

export default router;