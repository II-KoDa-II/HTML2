loadTasks();

function loadTasks() {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.forEach((task, index) => displayTask(task.title, task.about, index));
    noTasksDisplay();
}

function displayTask(title, about, index) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `
        <div id="${index}">
            <div>
                <div>
                    <div class="title-container">${title}</div>
                    <div class="about-container">${about}</div>
                </div>
                <button class="task-buttons delete-button">Delete</button>
            </div>
            <div class="button-container task-buttons" style="display: none;">
                <button class="task-buttons share-button">Share</button>
                <button class="task-buttons info-button">Info</button>
                <button class="task-buttons edit-button">Edit</button>
            </div>
        </div>
    `;
    taskContainer.appendChild(taskDiv);

    taskDiv.querySelector('.delete-button').addEventListener('click', () => deleteModal(index));
    taskDiv.querySelector('.share-button').addEventListener('click', () => shareModal(index));
    taskDiv.querySelector('.info-button').addEventListener('click', () => infoModal);
    taskDiv.querySelector('.edit-button').addEventListener('click', () => editModal(index));

    taskDiv.addEventListener('click', function (event) {
        if (!event.target.classList.contains('task-buttons')) {
            const buttonContainer = taskDiv.querySelector('.button-container');
            buttonContainer.style.display = buttonContainer.style.display == 'none' ? 'block' : 'none';
        }
    });
}

function noTasksDisplay() {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    const noTasksMessage = `<div id="no-tasks">No tasks</div>`;

    if (taskList.length == 0) {
        if (!document.getElementById('no-tasks')) {
            taskContainer.innerHTML = noTasksMessage;
        }
    } else {
        const noTasksMessageElement = document.getElementById('no-tasks');
        if (noTasksMessageElement) {
            noTasksMessageElement.remove();
        }
    }
}