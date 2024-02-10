// import NavBar from "../assets/components/navBar"
import Layout from "../layout"

export const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: "",
            },
        ]
    },
]
