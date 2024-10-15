function deleteModal(index) {
    currentTaskIndex = index;
    document.getElementById('delete-modal').style.display = 'block';
}

function shareModal() {
    document.getElementById('share-modal').style.display = 'block';
}

function infoModal() {
    document.getElementById('info-modal').style.display = 'block';
}

function editModal(index) {
    currentTaskIndex = index;
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    const task = taskList[index];
    
    document.getElementById('edit-title').value = task.title;
    document.getElementById('edit-about').value = task.about;
    document.getElementById('edit-modal').style.display = 'block';
}

window.onclick = function (event) {
    const modals = ['delete-modal', 'share-modal', 'info-modal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};

document.querySelectorAll('.cancel').forEach(closeButton => {
    closeButton.onclick = function () {
        this.closest('.modal').style.display = 'none';
    };
});
