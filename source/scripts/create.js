document.getElementById('create-task').addEventListener('click', createTask);

function createTask() {
    const title = document.getElementById('title').value;
    const about = document.getElementById('about').value;

    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    const maxIndex = taskList.length ? Math.max(...taskList.map(task => task.index)) : -1;

    let index;
    if (maxIndex === taskList.length - 1) {
        index = maxIndex + 1;
    } else {
        const existingIndexes = new Set(taskList.map(task => task.index));
        index = 0;
        while (existingIndexes.has(index)) {
            index++;
        }
    }

    taskList.push({title, about, index});
    localStorage.setItem('taskList', JSON.stringify(taskList));

    displayTask(title, about, index);
    showNotification('Created new task');
    noTasksDisplay();
}