const addTaskForm = document.getElementById('add-task-form');
const addTaskButton = document.getElementById('add-task-button');
const tasksSection = document.getElementById('tasks-section');

function addTask(title, about) {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';

    const taskContainerText = document.createElement('div');
    taskContainerText.className = 'task-container-text';
        
    const taskTitle = document.createElement('h1');
    taskTitle.textContent = title;
    const taskAbout = document.createElement('p');
    taskAbout.textContent = about;

    taskContainerText.appendChild(taskTitle);
    taskContainerText.appendChild(taskAbout);
    taskContainer.appendChild(taskContainerText);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-task-button';
    deleteButton.innerHTML = '<img src="/src/img/button_del_icon.svg">';

    deleteButton.addEventListener('click', function() {
        taskContainer.remove();
    });
    
    taskContainer.appendChild(deleteButton);
    tasksSection.appendChild(taskContainer);
}

addTaskButton.addEventListener('click', function() {
    const title = document.getElementById('task-title').value;
    const about = document.getElementById('task-about').value;

    if (title.trim() && about.trim()) {
        addTask(title, about);
        document.getElementById('task-title').value = '';
        document.getElementById('task-about').value = '';
    } else {
        alert('Please enter title and description!');
    }
});