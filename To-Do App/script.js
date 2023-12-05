function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("task-list");

    var li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(li);

    taskInput.value = "";
}

function removeTask(button) {
    var listItem = button.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}
