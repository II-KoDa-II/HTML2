function copyTask() {
    const shareMessage = document.getElementById('copy-task').getAttribute('data-task');

    navigator.clipboard.writeText(shareMessage)
        .then(() => {
            showNotification('Copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            showNotification('Failed to copy to clipboard');
        });
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}