const newTask = document.querySelector("#new-task");
const addTask = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");

let count = 0;

function addTaskToList(task) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", toggleTask);
  li.appendChild(checkbox);
  const taskText = document.createTextNode(task);
  li.appendChild(taskText);
  const deleteTask = document.createElement("span");
  deleteTask.classList.add("delete-task");
  deleteTask.addEventListener("click", removeTask);
  deleteTask.innerHTML = "&times;";
  li.appendChild(deleteTask);
  taskList.appendChild(li);
  count++;
  updateTaskCount();
}

function toggleTask() {
  const li = this.parentNode;
  li.classList.toggle("checked");
}

function removeTask() {
  const li = this.parentNode;
  taskList.removeChild(li);
  count--;
  updateTaskCount();
}

function updateTaskCount() {
  taskCount.innerHTML = `Total tasks: ${count}`;
}

addTask.addEventListener("click", function () {
  if (newTask.value !== "") {
    addTaskToList(newTask.value);
    newTask.value = "";
  }
});

newTask.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask.click();
  }
});