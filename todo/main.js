
function getCheckBox(taskStatus, taskText, div) {
    let checkBox = document.createElement('img')
    checkBox.alt = "check box icon";
    if (taskStatus == "active") {
        checkBox.src = "images/blank_check_box_icon.png";    
    } else if (taskStatus == "complete") {
        checkBox.src = "images/box_checked_icon.png";
    }

    checkBox.addEventListener("click", function (event) {
        if (taskStatus == "active") {
            event.target.src = "images/box_checked_icon.png";
            taskStatus = "complete";
            div.classList.remove("active")
            div.classList.add("complete")
        } else if (taskStatus == "complete") {
            event.target.src = "images/blank_check_box_icon.png";
            taskStatus = "active";
            div.classList.remove("complete")
            div.classList.add("active")
        }
        localStorage.setItem(taskText, `${taskText}:${taskStatus}`);
    });
    checkBox.addEventListener("click", countTasks);
    return checkBox;
}

function getXMark() {
    let xMark = document.createElement('img')
    xMark.src = "images/x_icon.png";
    xMark.alt = "delete icon"
    xMark.addEventListener("click", function (event) {
        event.target.parentElement.remove();
        let p = event.target.parentElement.querySelector(".task-p").innerHTML;
        localStorage.removeItem(p);
        countTasks()
    });
    xMark.classList = "x-mark";
    return xMark
}

function getCheckedBox() {
    let checkedBox = document.createElement('img');
    checkedBox.src = "images/box_checked_icon.png";
    checkedBox.alt = "Box with check mark in it"
    return checkedBox
}


function buildTask(taskText, taskStatus) {
    let taskP = document.createElement("p")
    taskP.innerHTML = taskText
    localStorage.setItem(taskText, `${taskText}:${taskStatus}`)
    taskP.classList = "task-p"
    let div = document.createElement("div")
    div.classList.add("task-div", taskStatus)
    div.appendChild(getCheckBox(taskStatus, taskText, div))
    div.appendChild(taskP)
    div.appendChild(getXMark())
    taskList.appendChild(div)
}

function addTask() {
    let taskText = document.getElementById("task").value
    document.getElementById("task").value = ""
    buildTask(taskText, "active")
    countTasks()
}

function loadTasks() {
    for (var i = 0; i < localStorage.length; i++) {
        let item = localStorage.getItem(localStorage.key(i))
        let itemArray = item.split(":")
        buildTask(itemArray[0], itemArray[1]);
    }
}

function countTasks() {
    let taskCount = document.getElementById("count-tasks")
    let activeTasks = Array.from(document.querySelectorAll(".active"))
    taskCount.innerHTML = `${activeTasks.length} tasks left!`
}

function showActiveTasks() {
    let allTasks = Array.from(document.querySelectorAll(".task-div"))
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].classList[1] == "active") {
            allTasks[i].style.display = 'inline-flex'
        } else {
            allTasks[i].style.display = 'none';
        }
    }
}

function showCompleteTasks() {
    let allTasks = Array.from(document.querySelectorAll(".task-div"))
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].classList[1] == "complete") {
            allTasks[i].style.display = 'inline-flex'
        } else {
            allTasks[i].style.display = 'none';
        }
    }
}

function showAllTasks() {
    let allTasks = Array.from(document.querySelectorAll(".task-div"))
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].style.display = 'inline-flex'
    }
}

let taskList = document.getElementById("tasks-list")

window.addEventListener("load", loadTasks);
window.addEventListener("load", countTasks)

let addButton = document.getElementById("add-sign")
addButton.addEventListener("click", addTask)

let activeButton = document.getElementById("active-button")
activeButton.addEventListener("click", showActiveTasks)

let completeButton = document.getElementById("complete-button")
completeButton.addEventListener("click", showCompleteTasks)

let allButton = document.getElementById("all-button")
allButton.addEventListener("click", showAllTasks)