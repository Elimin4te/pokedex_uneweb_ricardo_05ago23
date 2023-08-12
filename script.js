// Initial References
const newTaskInput = document.querySelector("#new-task input");
const tasksDiv = document.querySelector("#tasks");
let deleteTasks, editTasks, tasks;
let updateNote = "";
let count;

// Function on Window Load
window.onload = () => {
    updateNote = "";
    count = Object.keys(localStorage).length;
    displayTasks();
}

// Function to Display the Tasks
const displayTasks = () => {
    if (Object.keys(localStorage) > 0) {
        tasksDiv.style.display = "inline-block";
    } else {
        tasksDiv.style.display = "none";
    }

    // Clear Tasks
    tasksDiv.innerHTML = "";

    // Fetch all the keys in local storage
    let tasks = Object.keys(localStorage)
    tasks = tasks.sort();

    for (let key of tasks) {
        let classValue = "";

        // Get all Values
        let value = localStorage.getItem(key);
        let taskInnerDiv = document.createElement("div")
        taskInnerDiv.classList.add("task");
        taskInnerDiv.setAttribute("id", key);
        taskInnerDiv.innerHTML = `<span id="taskname">${key.split("_")[1]}</span>`;

        // Store Bool as Str in LocalStorage
        let editButton = document.createElement("button")
        editButton.classList.add('edit');
        editButton.innerHTML = `<ion-icon name="create"></ion-icon>`
        
    }
}

