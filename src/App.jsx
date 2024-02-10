import HeaderPage from "./pages/shared/HeaderPage";
import FooterPage from "./pages/shared/FooterPage";
import TasksPage from "./pages/home/TasksPage";

const App = () => {
  return (
    <>
      <HeaderPage />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-140px)]">
        <TasksPage />
      </div>
      <FooterPage />
    </>
  );
};

export default App;
