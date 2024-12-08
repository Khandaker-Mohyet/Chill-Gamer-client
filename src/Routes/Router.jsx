
import {
  createBrowserRouter,
  Link,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import AddReview from "../Pages/AddReview";
import MyReviews from "../Pages/MyReviews";
import GameWatchList from "../Pages/GameWatchList";
import Details from "../Components/Details";
import AuthLayout from "../MainLayout/AuthLayout";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateGamer from "../Components/UpdateGamer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('https://assignment-10-server-dusky.vercel.app/top-reviews')
      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>,
        loader:()=>fetch('https://assignment-10-server-dusky.vercel.app/gamer')
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-10-server-dusky.vercel.app/gamer/${params.id}`)
      },
      {
        path: "/addReview",
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
        
      },
      {
        path: "/myReviews",
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
        loader:()=>fetch('https://assignment-10-server-dusky.vercel.app/gamer')
      },
      {
        path: "/gameWatchList",
        element: <PrivateRoute><GameWatchList></GameWatchList></PrivateRoute>,
        loader:()=>fetch('https://assignment-10-server-dusky.vercel.app/watchList')
      },
      {
        path: "/update/:id",
        element: <UpdateGamer></UpdateGamer>,
        loader:({params})=>fetch(`https://assignment-10-server-dusky.vercel.app/gamer/${params.id}`)
      }
      
    ]
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
       path: "/auth/login",
       element: <LogIn></LogIn>,
      },
      {
       path: "/auth/register",
       element: <Register></Register>
      },
          
    ]
  },
  {
    path: "*",
    element: <div className="flex flex-col items-center justify-center">
      <div className="text-center text-3xl font-bold">Page Not Found</div>
      <Link to="/"><button className="btn btn-primary text-center">Go Home</button></Link>
    </div>,
  },
]);

export default router;