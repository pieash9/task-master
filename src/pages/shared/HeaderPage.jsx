import { Button } from "flowbite-react";
import { useState } from "react";
import AddTaskModal from "../../components/AddTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/features/theme/themeSlice";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

const HeaderPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <nav className=" w-full bg-gray-200/80 shadow-lg dark:bg-gray-800">
      <div className="flex justify-between py-4 max-w-7xl mx-auto">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Task Master
        </span>
        <div className="flex gap-4">
          <Button
            onClick={() => dispatch(toggleTheme())}
            className="size-10"
            color="gray"
            pill
          >
            {theme === "light" ? (
              <IoSunnySharp className="size-6" />
            ) : (
              <FaMoon className="size-5" />
            )}
          </Button>
          <Button
            onClick={() => setOpenModal(true)}
            gradientDuoTone="purpleToBlue"
            size="sm"
          >
            Add a Task
          </Button>
        </div>
      </div>
      <AddTaskModal openModal={openModal} setOpenModal={setOpenModal} />
    </nav>
  );
};

export default HeaderPage;
