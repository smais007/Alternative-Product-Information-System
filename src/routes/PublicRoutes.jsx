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
import Recommendation from "../pages/Recommendation/Recommendation";
import PrivateRoute from "./PrivateRoute";
import RecommendationForMe from "../pages/RecommendationForMe/RecommendationForMe";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Test from "../pages/Test/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://apis-server-eight.vercel.app/queries"),
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
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
        loader: () => fetch("https://apis-server-eight.vercel.app/queries"),
      },
      {
        path: "/add-query",
        element: (
          <PrivateRoute>
            <AddQuery></AddQuery>,
          </PrivateRoute>
        ),
      },
      {
        path: "/update-query/:id",
        element: (
          <PrivateRoute>
            <UpdateQuery></UpdateQuery>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          console.log(params, "from rou");
          return fetch(
            `https://apis-server-eight.vercel.app/queries/${params.id}`
          );
        },
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
        loader: () => fetch("https://apis-server-eight.vercel.app/queries"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        // loader: ({ params }) => fetch(`https://apis-server-eight.vercel.app/${params.id}`),
      },
      {
        path: "/my-recommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations></MyRecommendations>
          </PrivateRoute>
        ),
        // loader: () => fetch("https://apis-server-eight.vercel.app/recommendation"),
      },
      {
        path: "/recommendation/:id",
        element: (
          <PrivateRoute>
            <Recommendation></Recommendation>
          </PrivateRoute>
        ),
      },
      {
        path: "/recommendations-for-me",
        element: (
          <PrivateRoute>
            <RecommendationForMe></RecommendationForMe>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/test",
        element: (
          <PrivateRoute>
            <Test></Test>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://apis-server-eight.vercel.app/recommendation"),
      },
    ],
  },
]);
