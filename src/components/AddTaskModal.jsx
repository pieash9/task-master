/* eslint-disable react/prop-types */
import {
  Button,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const AddTaskModal = ({ openModal, setOpenModal }) => {
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
          <form className="flex max-w-md flex-col gap-4">
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
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="assignTo" value="Assign To" />
              </div>
              <Select id="assignTo" required gradientDuoTone="purpleToBlue">
                <option value="md. pieash">Md. Pieash</option>
                <option value="risan khan">Risan Khan</option>
                <option value="nihan khan">Nihan khan</option>
              </Select>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="assignTo" value="Priority" />
              </div>
              <Select id="assignTo" required gradientDuoTone="purpleToBlue">
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