import { createBrowserRouter } from 'react-router-dom'
import Layout from "../components/Layout"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            {path: "test", element: <ErrorPage />}
        ]
    }
])

export default routers