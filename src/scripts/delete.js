import { tasks, tasksSection, emptyTaskSection } from './add.js';

export function deleteTask(event) {
    if (event.target.dataset.action !== 'delete') return;

    const popUpDelHTML = `
        <div class="pop-up-del">
            <div class="pop-up-container-del">
                <div class="pop-up-body-del">
                    <div class="pop-up-del-text">Delete this task?</div>
                    <div class="pop-up-del-buttons">
                        <button id="yes-button">Yes</button>
                        <button id="no-button">No</button>
                    </div>
                </div>
            </div>
        </div>`;

    document.body.insertAdjacentHTML('beforeend', popUpDelHTML);

    const popUpDel = document.querySelector('.pop-up-del');
    const parenNode = event.target.closest('.task-container');

    document.querySelector('#yes-button').addEventListener('click', function() {
        const taskTools = parenNode.nextElementSibling;
        if (taskTools && taskTools.classList.contains('task-tools')) {
            taskTools.remove();
        }

        const index = tasks.findIndex((task) => task.id === Number(parenNode.id));
        tasks.splice(index, 1);
        parenNode.remove();
        popUpDel.remove();

        if (tasksSection.children.length === 1) {
            emptyTaskSection.classList.remove('none');
        }
    });

    document.querySelector('#no-button').addEventListener('click', function() {
        popUpDel.remove();
    });
}