const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const btn = document.querySelector(".btn");

// add new task to the list

function addTask() {
  let taskValue = inputTask.value;
  if (taskValue == "") {
    alert(" You must add value");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.innerHTML = taskValue;
    span.innerHTML = "&times;";

    taskList.appendChild(li);
    li.appendChild(span);
  }
  // clear input after add new task
  inputTask.value = " ";
  setTask();
}
//add task when click to add button
btn.addEventListener("click", addTask);

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    setTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    setTask();
  }
});

inputTask.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
function setTask() {
  localStorage.setItem("lists", taskList.innerHTML);
}
function loadTasks() {
  taskList.innerHTML = localStorage.getItem("lists");
}
loadTasks();
