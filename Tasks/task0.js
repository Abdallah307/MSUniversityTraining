/**
 * Given the following array of tasks , write a full code to do the following :
 * 1. write a function to add a task (it takes three parameters : id, title and status).
 * 2. write a function to remove a task by id (it takes one parameter : id).
 * 3. write a function to change the status of the task (it takes two parameters : id, newStatus).
 * 4. write a function to change the title of a task (it takes two parameters : id, newTitle).
 * 5. write a function to delete a task by id (it takes one parameter : id).
 * 6. write a function to print the array of tasks.
 */

const tasks = [
  {
    id: 1,
    title: "Go to school",
    status: "new",
  },
  {
    id: 2,
    title: "feed the animals",
    status: "new",
  },
  {
    id: 3,
    title: "buy a bottle of water",
    status: "new",
  },
];
console.log(tasks);

function addTask(id, title, status) {
  const exists = tasks.find((task) => {
    return id === task.id;
  });

  if (!exists) {
    tasks.push({ id, title, status });
    console.log("task added");
  }
}

let adding = addTask(4, "Nono", "old");
let adding2 = addTask(5, "Nono", "old");

console.log(tasks);

//function remove the task by ID
function removeByID(id) {
  let result = tasks.filter((task) => {
    return task.id !== id;
  });
  return result;
}
removeByID(2);

const updateStatus = (id, newStatus) => {
  const indexofID = tasks.findIndex((task) => {
    return task.id === id;
  });
  if (indexofID === -1) {
    console.log("No task with id " + id);
  } else tasks[indexofID].status = newStatus;
};
updateStatus(3, "Verey Old");

//4. write a function to change the title of a task (it takes two parameters : id, newTitle).
function updateTitle(id, newTitle) {
  const indexofID = tasks.findIndex((task) => {
    return task.id === id;
  });
  if (indexofID === -1) {
    console.log("no task founded");
  } else {
    tasks[indexofID].title = newTitle;
  }
}
updateTitle(3, "Lolo is not Lodo");

// write a function to print the array of tasks.

function printArray(value) {
  console.log(value);
}

tasks.forEach(printArray);
