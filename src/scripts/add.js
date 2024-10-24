import { deleteTask } from './delete.js';
import { openMenuTask } from './open_menu_task.js';

export const addTaskForm = document.querySelector('#add-task-form');
export const tasksSection = document.querySelector('#tasks-section');
export const titleInput = document.querySelector('#task-title');
export const aboutInput = document.querySelector('#task-about');

export let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach((task) => renderTask(task));

checkEmptyList();

addTaskForm.addEventListener('submit', addTask);
tasksSection.addEventListener('click', deleteTask);
tasksSection.addEventListener('click', openMenuTask);

function addTask(event) {
    event.preventDefault(); 

    const task = {
        id: Date.now(),
        title: titleInput.value,
        about: aboutInput.value
    };

    tasks.push(task);
    saveToLocalStorage();
    renderTask(task);

    titleInput.value = '';
    aboutInput.value = '';
    titleInput.focus();

    checkEmptyList();
}

export function checkEmptyList() {
    if (tasks.length == 0 ) {
        const emptyTaskHTML = `<div class="empty-task-section" id="empty-task-section">NO TASKS</div>`;
        tasksSection.insertAdjacentHTML('afterbegin', emptyTaskHTML);
    }

    if (tasks.length > 0) {
        const emptyTask = document.querySelector('#empty-task-section');
        emptyTask ? emptyTask.remove() : null;
    }
}

export function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTask(task) {
    const taskHTML = `
        <div id="${task.id}" type="submit" class="task-container">
            <div class="task-container-text">
                <h1>${task.title}</h1>
                <p>${task.about}</p>
            </div>
            <button type="button" data-action="delete"><img src="/src/img/button_del_icon.svg"></button>
        </div>`;

    tasksSection.insertAdjacentHTML('beforeend', taskHTML);
}