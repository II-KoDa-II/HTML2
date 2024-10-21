function infoModal() {
    document.getElementById('info-modal').style.display = 'block';
}

document.getElementById('delete-modal').addEventListener('click', modalClose);
document.getElementById('share-modal').addEventListener('click', modalClose);
document.getElementById('info-modal').addEventListener('click', modalClose);

function modalClose(event) {
    const modals = ['delete-modal', 'share-modal', 'info-modal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}

document.querySelectorAll('.cancel').forEach(closeButton => {
    closeButton.onclick = function () {
        this.closest('.modal').style.display = 'none';
    };
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}