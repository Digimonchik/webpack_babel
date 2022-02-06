import { setItem, getItem } from "./common.js";
import { createTask, getTasksList } from "./tasksGateway.js";

export const createCheckbox = ({ done, id }) => {
  console.log({ done, id });
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.setAttribute("data-id", id);
  checkboxElem.checked = done;
  checkboxElem.classList.add("list__item-checkbox");

  return checkboxElem;
};

const createListElem = ({ text, done, id }) => {
  const listItemElem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.setAttribute("data-id", id);
  listItemElem.classList.add("list__item");
  const checkboxElem = createCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add("list__item_done");
  }
  listItemElem.append(checkboxElem, text, deleteBtn);

  return listItemElem;
};
export const renderTasks = () => {
  const listElem = document.querySelector(".list");
  const tasksList = getItem("tasksList") || [];
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(createListElem);
  listElem.append(...tasksElems);
};
export const onCreateTask = () => {
  const taskInput = document.querySelector(".task-input");
  const text = taskInput.value;
  if (!text) {
    return;
  }
  taskInput.value = "";

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTaskList) => {
      setItem("tasksList", newTaskList);
      renderTasks();
    });

  renderTasks();
};
