import { useSelector } from "react-redux";
import TasksCard from "../../components/TasksCard";

const TasksPage = () => {
  const { tasks } = useSelector((state) => state.tasks);

  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const runningTasks = tasks.filter((task) => task.status === "running");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      <div>
        <div className="flex justify-between items-center bg-blue-200 py-3 px-4 rounded-md">
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Up Next
          </p>
          <p className="bg-blue-600 self-center px-2 py-1 rounded text-white text-lg">
            {pendingTasks.length}
          </p>
        </div>

        <div className="mt-10">
          {pendingTasks &&
            pendingTasks.map((task) => <TasksCard task={task} key={task.id} />)}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center bg-blue-200 py-3 px-4 rounded-md">
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            In Progress
          </p>
          <p className="bg-blue-600 self-center px-2 py-1 rounded text-white text-lg">
            {runningTasks.length}
          </p>
        </div>

        <div className="mt-10">
          {runningTasks &&
            runningTasks.map((task) => <TasksCard task={task} key={task.id} />)}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center bg-blue-200 py-3 px-4 rounded-md">
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Completed
          </p>
          <p className="bg-blue-600 self-center px-2 py-1 rounded text-white text-lg">
            {completedTasks.length}
          </p>
        </div>

        <div className="mt-10">
          {completedTasks &&
            completedTasks.map((task) => (
              <TasksCard task={task} key={task.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
