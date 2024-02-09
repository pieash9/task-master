import { Outlet } from "react-router-dom";
import HeaderPage from "./pages/shared/HeaderPage";
import FooterPage from "./pages/shared/FooterPage";

const App = () => {
  return (
    <div>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </div>
  );
};

export default App;
