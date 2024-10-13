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
            <div class="button-container" style="display: none;">
                <button>Share</button>
                <button>Info</button>
                <button>Edit</button>
            </div>
        </div>
    `;
    taskContainer.appendChild(taskDiv);

    taskDiv.addEventListener('click', function(event) {
        if (!event.target.classList.contains('delete-btn')) {
            const buttonContainer = taskDiv.querySelector('.button-container');
            buttonContainer.style.display = buttonContainer.style.display === 'none' ? 'block' : 'none';
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

function deleteTask(index) {
    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    taskContainer.innerHTML = '';
    loadTasks();
}

loadTasks();