import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/shared/ErrorPage";
import TasksPage from "../pages/home/TasksPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TasksPage />,
      },
    ],
  },
]);

export default routes;
