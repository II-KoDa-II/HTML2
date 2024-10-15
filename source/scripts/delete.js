let currentTaskIndex;

document.getElementById('confirm-delete').onclick = function () {
    deleteTask(currentTaskIndex);
    document.getElementById('delete-modal').style.display = 'none';
};

function deleteTask(index) {
    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    taskContainer.innerHTML = '';
    loadTasks();
}