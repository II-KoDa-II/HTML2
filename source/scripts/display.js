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
        <div id="${index}" class="whole-task">
            <div class="individual-task">
                <div class="vertical-flex">
                    <p class="title-container">${title}</p>
                    <p class="about-container">${about}</p>
                </div>
                <div class="individual-button">
                    <button class="task-buttons delete-button"><img src="assets\\icons\\delete.svg"></button>
                </div>
            </div>
            <div class="button-container task-buttons" style="display: none;">
                <button class="task-buttons share-button"><img src="assets\\icons\\share.svg" class="task-buttons"></button>
                <button class="task-buttons info-button"><img src="assets\\icons\\info.svg" class="task-buttons"></button>
                <button class="task-buttons edit-button"><img src="assets\\icons\\edit.svg" class="task-buttons"></button>
            </div>
        </div>
    `;
    document.getElementById('task-container').appendChild(taskDiv);

    taskDiv.querySelector('.delete-button').addEventListener('click', () => deleteModal(index));
    taskDiv.querySelector('.share-button').addEventListener('click', () => shareModal(index));
    taskDiv.querySelector('.edit-button').addEventListener('click', () => editModal(index));

    taskDiv.addEventListener('click', function (event) {
        if (!event.target.classList.contains('task-buttons')) {
            const buttonContainer = taskDiv.querySelector('.button-container');
            buttonContainer.style.display = buttonContainer.style.display == 'none' ? 'flex' : 'none';
        }
    });
}

function noTasksDisplay() {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    const noTasksMessage = `
        <div id="no-tasks">
            <hr>
            <p>
                No tasks
            </p>
            <hr>
        </div>
    `;

    if (taskList.length == 0) {
        if (!document.getElementById('no-tasks')) {
            document.getElementById('task-container').innerHTML = noTasksMessage;
        }
    } else {
        const noTasksMessageElement = document.getElementById('no-tasks');
        if (noTasksMessageElement) {
            noTasksMessageElement.remove();
        }
    }
}