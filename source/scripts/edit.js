function editTask(event) {
    event.preventDefault();
    const title = document.getElementById('edit-title').value;
    const about = document.getElementById('edit-about').value;

    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList[currentTaskIndex] = { title, about }; // Update the task
    localStorage.setItem('taskList', JSON.stringify(taskList));

    document.getElementById('edit-modal').style.display = 'none';
    taskContainer.innerHTML = ''; // Clear the task container
    loadTasks(); // Reload tasks to reflect changes
}