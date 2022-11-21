import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {path:'/', element:<Home></Home>},
        {path:'/home', element:<Home></Home>},
        {path:'/login', element:<Login></Login>},
        {path:'/signup', element:<Signup></Signup>},
        
        {path:'/services/:id',
        loader:({params}) => fetch(`https://server-car.vercel.app/services/${params.id}`),
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>},
        {path:'/orders', element:<PrivateRoute><Orders></Orders></PrivateRoute>},
    ]
}
])