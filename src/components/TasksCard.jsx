/* eslint-disable react/prop-types */
import { FaRegTrashAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const TasksCard = ({ task }) => {
  return (
    <div className="bg-gray-600/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === "high" ? "text-red-500" : ""
        } ${task.priority === "medium" ? "text-yellow-500" : ""} ${
          task.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-end mt-3">
        <div className="flex gap-3">
          <button title="Delete">
            <FaRegTrashAlt className="h-5 w-5 text-red-500" />
          </button>
          <button title="Update Status">
            <GoArrowRight className="h-6 w-6 text-blue-500 font-semibold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksCard;
