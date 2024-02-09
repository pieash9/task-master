/* eslint-disable react/prop-types */
import {
  Button,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useForm } from "react-hook-form";

const AddTaskModal = ({ openModal, setOpenModal }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
            Add a Task
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex max-w-md flex-col gap-4"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Title" />
              </div>
              <TextInput
                id="title"
                type="text"
                placeholder="Task name"
                required
                gradientDuoTone="purpleToBlue"
                {...register("title")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
              </div>
              <Textarea
                id="description"
                type="text"
                placeholder="Details about task..."
                required
                gradientDuoTone="purpleToBlue"
                {...register("description")}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="assignTo" value="Assign To" />
              </div>
              <Select
                id="assignTo"
                required
                gradientDuoTone="purpleToBlue"
                {...register("assignedTo")}
              >
                <option value="md. pieash">Md. Pieash</option>
                <option value="risan khan">Risan Khan</option>
                <option value="nihan khan">Nihan khan</option>
              </Select>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="priority" value="Priority" />
              </div>
              <Select
                id="priority"
                required
                gradientDuoTone="purpleToBlue"
                {...register("priority")}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </Select>
            </div>

            <Button size="sm" gradientDuoTone="purpleToBlue" type="submit">
              Submit Task
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
