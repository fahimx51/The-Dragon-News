import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ForgetPassword from "../pages/ForgetPassword";

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
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path : "/auth/login",
            element: <Login></Login>
        },
        {
            path : "/auth/register",
            element: <Registration></Registration>
        },
        {
            path : "/auth/forget-password",
            element: <ForgetPassword></ForgetPassword>
        },
    ]
  },
  {
    path: "news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);
