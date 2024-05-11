import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/AuthrnticationPage/Login";
import Signup from "../pages/AuthrnticationPage/Signup";
import MyQueries from "../pages/MyQueries/MyQueries";
import AddQuery from "../pages/AddQuery/AddQuery";
import Queries from "../pages/Queries/Queries";
import Details from "../pages/Details/Details";
import MyRecommendations from "../pages/MyRecommendations/MyRecommendations";
import UpdateQuery from "../pages/UpdateQuery/UpdateQuery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/log-in",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <Signup></Signup>,
      },
      {
        path: "/my-queries",
        element: <MyQueries></MyQueries>,
        loader: () => fetch("http://localhost:5000/queries"),
      },
      {
        path: "/add-query",
        element: <AddQuery></AddQuery>,
      },
      {
        path: "/update-query/:id",
        element: <UpdateQuery></UpdateQuery>,
        loader: ({ params }) => {
          console.log(params, "from rou");
          return fetch(`http://localhost:5000/queries/${params.id}`);
        },
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
        loader: () => fetch("http://localhost:5000/queries"),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        // loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/my-recommendations",
        element: <MyRecommendations></MyRecommendations>,
      },
    ],
  },
]);
