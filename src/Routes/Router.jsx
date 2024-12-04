
import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import AddReview from "../Pages/AddReview";
import MyReviews from "../Pages/MyReviews";
import GameWatchList from "../Pages/GameWatchList";

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
        element: <AllReviews></AllReviews>
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
]);

export default router;