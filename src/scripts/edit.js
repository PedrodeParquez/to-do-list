import { tasksSection, tasks } from "./add.js";

export function openEditPopUp(taskContainer) {
    const existingPopUp = document.querySelector('.pop-up-edit');
    if (existingPopUp) {
        existingPopUp.remove();
    }

    const popUpEditHTML = `
    <div class="pop-up-edit">
        <div class="pop-up-container-edit">
            <div class="pop-up-body-edit">
                <input type="text" id="edit-title" placeholder="Mini Input">
                <input type="text" id="edit-about" placeholder="Max Input">
            </div>
            <div class="pop-up-edit-buttons">
                <button id="cancel-edit">Cancel</button>
                <button id="save-edit">Save</button>
            </div>
        </div>
    </div>`;

    tasksSection.insertAdjacentHTML('beforebegin', popUpEditHTML);  

    const popUpEdit = document.querySelector('.pop-up-edit');
    const titleInput = document.querySelector('#edit-title');
    const aboutInput = document.querySelector('#edit-about');

    const taskTitle = taskContainer.querySelector('h1').textContent;
    const taskAbout = taskContainer.querySelector('p').textContent;

    titleInput.value = taskTitle;
    aboutInput.value = taskAbout;

    document.querySelector('#cancel-edit').addEventListener('click', function() {
        popUpEdit.remove();
    });

    document.querySelector('#save-edit').addEventListener('click', function() {
        const newTitle = titleInput.value;
        const newAbout = aboutInput.value;

        const index = tasks.findIndex((task) => task.id === Number(taskContainer.id));
        tasks[index].title = newTitle;
        tasks[index].about = newAbout;

        taskContainer.querySelector('h1').textContent = newTitle;
        taskContainer.querySelector('p').textContent = newAbout;

        popUpEdit.remove();
    });
}
