function addTask() {
  let inputBox = document.getElementById("taskInput");
  let taskValue = inputBox.value.trim();

  if (taskValue === "") {
    alert("Please enter a task.");
    return;
  }

  let listItem = document.createElement("li");
  let taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = taskValue;

  let buttonGroup = document.createElement("div");
  buttonGroup.classList.add("actions");

  let doneButton = document.createElement("button");
  doneButton.innerHTML = "✔️";
  doneButton.classList.add("check-btn");

  doneButton.addEventListener("click", function () {
    listItem.classList.toggle("completed");

    if (listItem.classList.contains("completed")) {
      taskText.textContent = taskValue + " 👍";
    } else {
      taskText.textContent = taskValue;
    }
  });

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "🗑️";
  deleteButton.classList.add("delete-btn");

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  buttonGroup.appendChild(doneButton);
  buttonGroup.appendChild(deleteButton);

  listItem.appendChild(taskText);
  listItem.appendChild(buttonGroup);

  document.getElementById("taskList").appendChild(listItem);

  inputBox.value = "";
}
