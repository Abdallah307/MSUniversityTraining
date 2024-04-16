const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//Add task
function addTask() {
  const taskText = taskInput.value;

  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    taskList.appendChild(listItem);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

addTaskBtn.addEventListener("click", addTask);
