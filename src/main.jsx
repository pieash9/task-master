import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import ThemeProvider from "./provider/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </Provider>
);
