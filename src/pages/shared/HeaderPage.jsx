import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import AddTaskModal from "../../components/AddTaskModal";

const HeaderPage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <nav className="max-w-7xl mx-auto w-full ">
      <Navbar fluid rounded>
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Task Master
        </span>
        <Button
          onClick={() => setOpenModal(true)}
          gradientDuoTone="purpleToBlue"
          size="sm"
        >
          Add a Task
        </Button>
      </Navbar>
      <AddTaskModal openModal={openModal} setOpenModal={setOpenModal} />
    </nav>
  );
};

export default HeaderPage;
