function deleteTask(index) {
    document.getElementById('delete-modal').style.display = 'none';
    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    taskContainer.innerHTML = '';
    loadTasks();
    showNotification('Deleted a task')
}