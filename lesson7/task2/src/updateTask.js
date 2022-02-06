import { renderTasks } from "./addTask.js";
import { getItem, setItem } from "./common.js";
import { updateTask, getTasksList, deleteTask } from "./tasksGateway.js";

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");
  const isDeleteBtm = e.target.classList.contains("delete-btn");

  if (isDeleteBtm) {
    const taskId = e.target.dataset.id;
    deleteTask(taskId)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem("tasksList", newTasksList);
        renderTasks();
      });
  }
  if (isCheckbox) {
    const taskId = e.target.dataset.id;
    const tasksList = getItem("tasksList");
    const { text, createDate } = tasksList.find((task) => taskId == task.id);
    const done = e.target.checked;

    const updatedTask = {
      text,
      createDate,
      done,
      finishDate: done ? new Date().toISOString() : null,
    };

    updateTask(taskId, updatedTask)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem("tasksList", newTasksList);
        renderTasks();
      });
  }
};
