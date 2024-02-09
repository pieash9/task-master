import { Outlet } from "react-router-dom";
import HeaderPage from "./pages/shared/HeaderPage";
import FooterPage from "./pages/shared/FooterPage";

const App = () => {
  return (
    <>
      <HeaderPage />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      <FooterPage />
    </>
  );
};

export default App;
