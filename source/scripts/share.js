function shareModal(index) {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    const task = taskList[index];

    const shareMessage = `${task.title}\n${task.about}`;
    document.getElementById('copy-task').setAttribute('data-task', shareMessage);
    document.getElementById('share-modal').style.display = 'block';
}

document.getElementById('copy-task').addEventListener('click', copyTask);

function copyTask() {
    const shareMessage = document.getElementById('copy-task').getAttribute('data-task');

    navigator.clipboard.writeText(shareMessage)
        .then(() => {
            showNotification('Copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            showNotification('Failed to copy to clipboard');
        });
}