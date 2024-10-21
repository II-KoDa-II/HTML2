function editModal(index) {
    currentTaskIndex = index;
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    const task = taskList[index];

    document.getElementById('edit-title').value = task.title;
    document.getElementById('edit-about').value = task.about;
    document.getElementById('edit-modal').style.display = 'block';
}

document.getElementById('edit-task').addEventListener('click', editTask);

function editTask(event) {
    event.preventDefault();
    const title = document.getElementById('edit-title').value;
    const about = document.getElementById('edit-about').value;

    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList[currentTaskIndex] = { title, about };
    localStorage.setItem('taskList', JSON.stringify(taskList));

    const taskDiv = document.getElementById(currentTaskIndex);
    taskDiv.querySelector('.title-container').innerText = title;
    taskDiv.querySelector('.about-container').innerText = about;

    const buttonContainer = taskDiv.querySelector('.button-container');
    buttonContainer.style.display = buttonContainer.style.display == 'none' ? 'block' : 'none';

    document.getElementById('edit-modal').style.display = 'none';
    showNotification('Changes saved')
}