import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ForgetPassword from "../pages/ForgetPassword";
import NewsDetailsLayout from "../layouts/NewsDetailsLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "category/:id",
        loader: () => fetch("/news.json"),
        element: <CategoryNews></CategoryNews>,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        index: true,
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Registration></Registration>,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
  {
    path: "news",
    element: (
      <PrivateRoute>
        <NewsDetailsLayout></NewsDetailsLayout>
      </PrivateRoute>
    ),

    children: [
      {
        path: ":id",
        loader: () => fetch("/news.json"),
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);
