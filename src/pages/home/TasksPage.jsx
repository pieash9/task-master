const TasksPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      <div>
        <div className="flex justify-between bg-blue-200 py-3 px-4 rounded-md">
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Up Next
          </p>
          <p className="bg-blue-600 self-center px-2 py-1 rounded text-white text-lg">
            0
          </p>
        </div>

        <div className="mt-10"></div>
      </div>
      <div className="">
        <p>In Progress</p>
      </div>
      <div className="">
        <p>Completed</p>
      </div>
    </div>
  );
};

export default TasksPage;
