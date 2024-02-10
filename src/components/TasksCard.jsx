/* eslint-disable react/prop-types */
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import { removeTask, updateStatus } from "../redux/features/tasks/taskSlice";
import UpdateTaskModal from "./UpdateTaskModal";
import { useState } from "react";

const TasksCard = ({ task }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  let updatedStatus;
  if (task.status === "pending") {
    updatedStatus = "running";
  } else {
    updatedStatus = "completed";
  }
  return (
    <div className="bg-gray-600/10 rounded-md p-5 overflow-hidden">
      <h1
        className={`text-xl font-semibold mb-3  ${
          task.priority === "high" ? "text-red-500" : ""
        } ${task.priority === "medium" ? "text-yellow-300" : ""} ${
          task.priority === "low" ? "text-green-400" : ""
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">
        Assigned to -{" "}
        <span className="capitalize bg-blue-200 px-2 py-.5 rounded font-medium dark:text-black">
          {task?.assignedTo}
        </span>
      </p>

      <div className="flex justify-end mt-3">
        <div className="flex gap-3">
          <button title="Edit">
            <FaRegEdit
              onClick={() => setOpenModal(true)}
              className="h-5 w-5 text-green-500"
            />
          </button>
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <FaRegTrashAlt className="h-5 w-5 text-red-500" />
          </button>
          {task.status !== "completed" && (
            <button title="Update Status">
              <GoArrowRight
                onClick={() =>
                  dispatch(updateStatus({ id: task.id, status: updatedStatus }))
                }
                className="h-6 w-6 text-blue-500 font-semibold"
              />
            </button>
          )}
        </div>
      </div>
      <UpdateTaskModal
        task={task}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default TasksCard;
