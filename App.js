// Select the main container
const root = document.getElementById("root");

// Style the root
root.style.maxWidth = "500px";
root.style.margin = "50px auto";
root.style.padding = "30px";
root.style.borderRadius = "12px";
root.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.1)";
root.style.fontFamily = "Segoe UI, sans-serif";
root.style.backgroundColor = "#ffffff";

// ---------- Title ----------
const title = document.createElement("h2");
title.textContent = "Mini Task Tracker";
title.style.textAlign = "center";
title.style.marginBottom = "20px";
title.style.color = "#3b82f6";
root.appendChild(title);

// ---------- Input Field ----------
const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.placeholder = "Enter a new task...";
taskInput.style.width = "100%";
taskInput.style.padding = "12px";
taskInput.style.marginBottom = "10px";
taskInput.style.fontSize = "16px";
taskInput.style.border = "1px solid #ccc";
taskInput.style.borderRadius = "8px";
taskInput.style.boxSizing = "border-box";
root.appendChild(taskInput);

// ---------- Add Task Button ----------
const addButton = document.createElement("button");
addButton.textContent = "Add Task";
addButton.style.backgroundColor = "#3b82f6";
addButton.style.color = "white";
addButton.style.padding = "12px";
addButton.style.width = "100%";
addButton.style.fontSize = "16px";
addButton.style.border = "none";
addButton.style.borderRadius = "8px";
addButton.style.cursor = "pointer";
addButton.style.marginBottom = "20px";
addButton.onmouseover = () => addButton.style.opacity = "0.9";
addButton.onmouseleave = () => addButton.style.opacity = "1";
root.appendChild(addButton);

// ---------- Task List Container ----------
const taskList = document.createElement("div");
taskList.style.marginTop = "10px";
root.appendChild(taskList);

// ---------- Task Counter ----------
const taskCounter = document.createElement("p");
taskCounter.textContent = "Tasks remaining: 0";
taskCounter.style.marginTop = "20px";
taskCounter.style.fontWeight = "bold";
taskCounter.style.color = "#374151";
root.appendChild(taskCounter);

// ---------- Task Management Logic ----------
let remainingTasks = 0;

function updateCounter() {
  taskCounter.textContent = `Tasks remaining: ${remainingTasks}`;
}

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create task container
  const taskItem = document.createElement("div");
  taskItem.style.display = "flex";
  taskItem.style.alignItems = "center";
  taskItem.style.justifyContent = "space-between";
  taskItem.style.backgroundColor = "#f9fafb";
  taskItem.style.padding = "10px 12px";
  taskItem.style.borderRadius = "8px";
  taskItem.style.marginBottom = "10px";
  taskItem.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.05)";

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.transform = "scale(1.2)";
  checkbox.style.cursor = "pointer";

  // Task label
  const label = document.createElement("label");
  label.textContent = taskText;
  label.style.flex = "1";
  label.style.marginLeft = "10px";
  label.style.fontSize = "16px";
  label.style.color = "#111827";

  // Checkbox logic
  checkbox.addEventListener("change", () => {
    const completed = checkbox.checked;
    label.style.textDecoration = completed ? "line-through" : "none";
    label.style.color = completed ? "#9ca3af" : "#111827";
    remainingTasks += completed ? -1 : 1;
    updateCounter();
  });

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.backgroundColor = "#ef4444";
  deleteButton.style.color = "white";
  deleteButton.style.padding = "6px 10px";
  deleteButton.style.border = "none";
  deleteButton.style.borderRadius = "6px";
  deleteButton.style.cursor = "pointer";
  deleteButton.style.fontSize = "14px";

  deleteButton.onclick = () => {
    if (!checkbox.checked) {
      remainingTasks--;
    }
    taskItem.remove();
    updateCounter();
  };

  // Append to task item
  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Update state
  remainingTasks++;
  updateCounter();
  taskInput.value = "";
});
