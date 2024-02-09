/* eslint-disable react/prop-types */
import { FaRegTrashAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import { removeTask, updateStatus } from "../redux/features/tasks/taskSlice";

const TasksCard = ({ task }) => {
  const dispatch = useDispatch();

  let updatedStatus;
  if (task.status === "pending") {
    updatedStatus = "running";
  } else {
    updatedStatus = "completed";
  }
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
    </div>
  );
};

export default TasksCard;
