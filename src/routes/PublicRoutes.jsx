import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/AuthrnticationPage/Login";
import Signup from "../pages/AuthrnticationPage/Signup";
import MyQueries from "../pages/MyQueries/MyQueries";
import AddQuery from "../pages/AddQuery/AddQuery";
import Queries from "../pages/Queries/Queries";
import Details from "../pages/Details/Details";

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
      },
      {
        path: "/add-query",
        element: <AddQuery></AddQuery>,
      },
      {
        path: "/queries",
        element: <Queries></Queries>
      },
      {
        path: "/query/details",
        element: <Details></Details>
      },
    ],
  },
]);
