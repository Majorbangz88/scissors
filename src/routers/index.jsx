// import NavBar from "../assets/components/navBar"
import Home from "../pages/Home"
import Layout from "../layout"

export const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home/>
            },
        ]
    },
]
