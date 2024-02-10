import { useSelector } from "react-redux";
import TasksCard from "../../components/TasksCard";
import { useState } from "react";
import { Select } from "flowbite-react";

const TasksPage = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const [filterValue, setFilterValue] = useState("default");

  let finalFilteredTask = filterValue === "default" ? tasks : [];
  tasks.map((task) => {
    if (task.priority === filterValue) {
      finalFilteredTask.push(task);
    }
  });

  const pendingTasks = finalFilteredTask.filter(
    (task) => task.status === "pending"
  );
  const runningTasks = finalFilteredTask.filter(
    (task) => task.status === "running"
  );
  const completedTasks = finalFilteredTask.filter(
    (task) => task.status === "completed"
  );

  return (
    <div className="p-4">
      <Select
        onChange={(e) => setFilterValue(e.target.value)}
        defaultValue=""
        id="filter"
        required
        className="w-40 mt-5"
      >
        <option value="default">Filter By Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </Select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        <div>
          <div className="flex justify-between items-center bg-blue-200 dark:bg-blue-200/20 py-3 px-4 rounded-md">
            <p className="text-xl font-semibold">Up Next</p>
            <p className="bg-blue-600 self-center px-2 py-1 rounded text-white text-lg">
              {pendingTasks.length}
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5">
            {pendingTasks &&
              pendingTasks.map((task) => (
                <TasksCard task={task} key={task.id} />
              ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center bg-blue-200 dark:bg-blue-200/20 py-3 px-4 rounded-md">
            <p className="text-xl font-semibold">In Progress</p>
            <p className="bg-blue-600 self-center px-2 py-1 rounded text-white text-lg">
              {runningTasks.length}
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5">
            {runningTasks &&
              runningTasks.map((task) => (
                <TasksCard task={task} key={task.id} />
              ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center bg-blue-200 dark:bg-blue-200/20 py-3 px-4 rounded-md">
            <p className="text-xl font-semibold">Completed</p>
            <p className="bg-blue-600 self-center px-2 py-1 rounded text-white text-lg">
              {completedTasks.length}
            </p>
          </div>
          <div className="mt-5  grid grid-cols-1 gap-5">
            {completedTasks &&
              completedTasks.map((task) => (
                <TasksCard task={task} key={task.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
