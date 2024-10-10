const taskContainer = document.getElementById('taskContainer');

function loadTasks() {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.forEach((task, index) => displayTask(task.title, task.about, index));
}

function displayTask(title, about, index) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `
        <div>
            <div>
                <div>${title}</div>
                <div>${about}</div
            </div>
            <button onclick="deleteTask(${index})">Delete</button>
        </div>
    `;
    taskContainer.appendChild(taskDiv);
}

function addTask(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const about = document.getElementById('about').value;

    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.push({ title, about });
    localStorage.setItem('taskList', JSON.stringify(taskList));

    displayTask(title, about, taskList.length - 1);
    taskForm.reset();
}

function deleteTask(index) {
    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    taskContainer.innerHTML = '';
    loadTasks();
}

loadTasks();