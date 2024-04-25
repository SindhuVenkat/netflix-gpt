import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";

const Body = () => {

const router =  createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    }
])

return(
    <div>
        <RouterProvider router={router} />
    </div>
)
}

export default Body;