// import NavBar from "../assets/components/navBar"
import Home from "../pages/Home"
import Layout from "../layout"
import Login from "../pages/Login"
import Form from '../pages/Login/Form'

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
    {
        path:"/login",
        elment: <Login/>,
        children: [
            {
                path: "",
                element: <Form/>,
            },
           
        ]
    }
]
