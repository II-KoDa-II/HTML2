function editTask(event) {
    event.preventDefault();
    const title = document.getElementById('edit-title').value;
    const about = document.getElementById('edit-about').value;

    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList[currentTaskIndex] = { title, about };
    localStorage.setItem('taskList', JSON.stringify(taskList));

    document.getElementById('edit-modal').style.display = 'none';
    taskContainer.innerHTML = '';
    loadTasks();
    showNotification('Changes saved')
}