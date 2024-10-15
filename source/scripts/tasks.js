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
                <div>${about}</div>
            </div>
            <button class="task-buttons" onclick="deleteModal(${index})">Delete</button>
        </div>
        <div class="button-container task-buttons" style="display: none;">
            <button class="task-buttons" onclick="shareModal(${index})">Share</button>
            <button class="task-buttons" onclick="infoModal()">Info</button>
            <button class="task-buttons" onclick="editModal(${index})">Edit</button>
        </div>
    `;
    taskContainer.appendChild(taskDiv);

    taskDiv.addEventListener('click', function (event) {
        if (!event.target.classList.contains('task-buttons')) {
            const buttonContainer = taskDiv.querySelector('.button-container');
            buttonContainer.style.display = buttonContainer.style.display == 'none' ? 'block' : 'none';
        }
    });
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

loadTasks();