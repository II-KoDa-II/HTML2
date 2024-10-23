let deleteTaskHandler;

function deleteModal(index) {
    document.getElementById('delete-modal').style.display = 'flex';

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

    taskList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));

    document.getElementById('task-container').innerHTML = '';
    loadTasks();

    showNotification('Deleted a task');
}