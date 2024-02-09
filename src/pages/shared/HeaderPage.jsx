import { Button, Navbar } from "flowbite-react";

const HeaderPage = () => {
  return (
    <div className="max-w-7xl mx-auto w-full ">
      <Navbar fluid rounded>
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Task Master
        </span>
        <Button gradientDuoTone="purpleToBlue" size="sm">
          Add a Task
        </Button>
      </Navbar>
    </div>
  );
};

export default HeaderPage;
