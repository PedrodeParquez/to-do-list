import { openEditPopUp } from "./edit.js";
import { openSharePopUp } from "./share.js";

export function openMenuTask (event) {
    if (event.target.dataset.action === 'delete') return;

    const taskContainer = event.target.closest('.task-container');

    if (!taskContainer) {
        return;
    }

    let existingTaskTools = taskContainer.nextElementSibling;

    if (existingTaskTools && existingTaskTools.classList.contains('task-tools')) {
        existingTaskTools.remove();
        return;
    }

    existingTaskTools = document.querySelector('.task-tools');
    if (existingTaskTools) {
        existingTaskTools.remove();
    }

    const taskMenuHTML = `
        <div class="task-tools">
            <button id="share"><img src="/src/img/button_share_icon.svg"></button>
            <button id="info"><img src="/src/img/button_info_icon.svg"></button>
            <button id="edit"><img src="/src/img/button_edit_icon.svg"></button>
        </div>`;
    
    taskContainer.insertAdjacentHTML('afterend', taskMenuHTML);  
    
    document.querySelector('#share').addEventListener('click', function() {
        openSharePopUp(taskContainer);
    });

    document.querySelector('#edit').addEventListener('click', function() {
        openEditPopUp(taskContainer);
    });
}