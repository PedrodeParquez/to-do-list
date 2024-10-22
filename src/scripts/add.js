import { deleteTask } from './delete.js';

export let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export const addTaskForm = document.querySelector('#add-task-form');
export const tasksSection = document.querySelector('#tasks-section');
export const emptyTaskSection = document.querySelector('#empty-task-section')
export const titleInput = document.querySelector('#task-title');
export const aboutInput = document.querySelector('#task-about');

addTaskForm.addEventListener('submit', addTask);
tasksSection.addEventListener('click', deleteTask);

function addTask(event) {
    event.preventDefault(); 

    const task = {
        id: Date.now(),
        title: titleInput.value,
        about: aboutInput.value
    };

    tasks.push(task);

    const taskHTML = `
        <div id="${task.id}" class="task-container">
            <div class="task-container-text">
                <h1>${task.title}</h1>
                <p>${task.about}</p>
            </div>
            <button type="button" data-action="delete"><img src="/src/img/button_del_icon.svg"></button>
        </div>`;

    tasksSection.insertAdjacentHTML('beforeend', taskHTML);

    titleInput.value = '';
    aboutInput.value = '';
    titleInput.focus();

    if (tasksSection.children.length > 1) {
        emptyTaskSection.classList.add('none');
    }

    console.log(tasksSection.children.length);
}
