import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/shared/ErrorPage";
import HomePage from "../pages/home/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default routes;
