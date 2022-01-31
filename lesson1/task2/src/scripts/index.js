import { initToDoHandlers } from "./initHandlers.js";
import { renderTasks } from "./addTask.js";
import { getTasksList } from "./tasksGateway.js";
import { setItem } from "./common.js";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((taskList) => {
    setItem("tasksList", taskList);
    renderTasks();
  });
  initToDoHandlers();
});

const onStorangeChange = (e) => {
  console.log(e.key);
  if (e.key === "tasksList") {
    renderTasks();
  }
};
window.addEventListener("storage", onStorangeChange);
