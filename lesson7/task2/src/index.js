import { initToDoHandlers } from "./initHandlers.js";
import { createCheckbox, renderTasks } from "./addTask.js";
import { getTasksList } from "./tasksGateway.js";
import { setItem } from "./common.js";
import './styles.css'

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((taskList) => {
    setItem("tasksList", taskList);
    renderTasks();
  });
  initToDoHandlers();
  console.log(createCheckbox({ done: false, id: "1" }));
});

const onStorangeChange = (e) => {
  console.log(e.key);
  if (e.key === "tasksList") {
    renderTasks();
  }
};
window.addEventListener("storage", onStorangeChange);
