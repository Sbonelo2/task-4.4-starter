const mainElement = document.getElementById("root");
document.body.appendChild(mainElement);
const taskInput = document.createElement("input"); //add an input
taskInput.type = "text";
taskInput.placeholder = "Enter a new task...";
taskInput.style.padding = "10px"; // style for the div
taskInput.style.margin = "10px 0";
root.appendChild(taskInput);


const addButton = document.createElement("button"); //button for adding
addButton.textContent = "Add Task";
addButton.style.backgroundColor = "grey"
addButton.style.color = "white"
root.appendChild(addButton);


const taskList = document.createElement("div");
taskList.style.marginTop = "20px";
root.appendChild(taskList);


addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  const taskItem = document.createElement("div");
  taskItem.style.marginBottom = "5px";
  taskItem.style.display = "flex";
  taskItem.style.alignItems = "center";
  taskItem.style.gap = "10px";
  const checkbox = document.createElement("input"); //for checkbox
  checkbox.type = "checkbox";
  const label = document.createElement("label");
  label.textContent = " " + taskText;


  // line-through on checkbox
  checkbox.addEventListener("change", () => {
    label.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });


  const deleteButton = document.createElement("button"); //deleteButton style
  deleteButton.textContent = "Delete";
  deleteButton.style.backgroundColor = "green";
  deleteButton.style.color = "white";
  deleteButton.style.border = "none";
  deleteButton.style.padding = "3px 6px";
  deleteButton.style.cursor = "pointer";
  deleteButton.onclick = function () {
    this.parentNode.remove(); // Removes the parent <li> element
  };
  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
  taskInput.value = "";
});


