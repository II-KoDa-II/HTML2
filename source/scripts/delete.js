let deleteTaskHandler;

function deleteModal(index) {
    document.getElementById('delete-modal').style.display = 'block';

    const deleteButton = document.getElementById('delete-task');
    if (deleteTaskHandler) {
        deleteButton.removeEventListener('click', deleteTaskHandler);
    }

    deleteTaskHandler = () => deleteTask(index);

    deleteButton.addEventListener('click', deleteTaskHandler);
}

function deleteTask(index) {
    document.getElementById('delete-modal').style.display = 'none';
    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

    taskList = taskList.filter(task => task.index !== index);
    localStorage.setItem('taskList', JSON.stringify(taskList));

    const taskDiv = document.getElementById(index);
    taskDiv.parentElement.remove();

    showNotification('Deleted a task');
    noTasksDisplay();
}
