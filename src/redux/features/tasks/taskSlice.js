import { createSlice } from "@reduxjs/toolkit";

const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks
    ? JSON.parse(tasks)
    : [
        {
          id: 1,
          title: "Create a todo App",
          status: "pending",
          description: "create it.",
          assignedTo: "md. pieash",
          priority: "high",
        },
      ];
};

const storeTaskToLocalStorage = (tasks) =>
  localStorage.setItem("tasks", JSON.stringify(tasks));

const initialState = {
  tasks: getTasksFromLocalStorage(),
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
      storeTaskToLocalStorage(state.tasks);
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
      storeTaskToLocalStorage(state.tasks);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((task) => task.id === payload.id);
      target.status = payload.status;
      storeTaskToLocalStorage(state.tasks);
    },
    updateTask: (state, { payload }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === payload.id) {
          return { ...task, ...payload };
        } else {
          return task;
        }
      });
      storeTaskToLocalStorage(state.tasks);
    },
  },
});

export const { addTask, removeTask, updateStatus, updateTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
