import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import FindPartners from "../pages/FindPartners";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyConnections from "../pages/MyConnections";
import CreatePartnerProfile from "../pages/CreatePartnerProfile";
import DetailsPage from "../pages/DetailsPage";

const router = createBrowserRouter([
    {
        path:'/', 
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/findPartners',
                Component: FindPartners,
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
                Component: MyConnections,
            },
            {
                path: '/createPartnerProfile',
                Component: CreatePartnerProfile,
            },
            {
                path: '/DetailsPage',
                Component: DetailsPage,
            }
        ]
    }
])

export default router;