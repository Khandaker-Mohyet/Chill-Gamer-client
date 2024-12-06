
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:4000/gamer')
      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>,
        loader:()=>fetch('http://localhost:4000/gamer')
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader:({params})=>fetch(`http://localhost:4000/gamer/${params.id}`)
      },
      {
        path: "/addReview",
        element: <AddReview></AddReview>
      },
      {
        path: "/myReviews",
        element: <MyReviews></MyReviews>
      },
      {
        path: "/gameWatchList",
        element: <GameWatchList></GameWatchList>
      },
      
    ]
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
       path: "login",
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