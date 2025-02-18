// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Event listener to add task when button is clicked
addTaskBtn.addEventListener("click", addTask);

// Function to add a task
function addTask() {
  const taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");

  // Add task text
  const taskText = document.createElement("span");
  taskText.textContent = taskName;

  // Create delete button for each task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // Append the task and delete button to the list item
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  // Append the list item to the task list
  taskList.appendChild(li);

  // Clear the input field after adding a task
  taskInput.value = "";
}
