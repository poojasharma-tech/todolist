document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('input[type="text"]');
    const addTaskButton = document.querySelector('button');
    const todoList = document.getElementById('taskList');

    function addTask() {
        const taskValue = taskInput.value.trim();
        if (taskValue === '') return;

        const listItem = document.createElement('li');

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        const taskText = document.createElement('span');
        taskText.innerText = taskValue;
        taskDiv.appendChild(taskText);

        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => editTask(taskText, editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => todoList.removeChild(listItem);

        listItem.appendChild(taskDiv);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);

        todoList.appendChild(listItem);

        taskInput.value = '';
    }

    function editTask(taskText, editBtn) {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText.innerText;

        const saveBtn = document.createElement('button');
        saveBtn.innerText = 'Save';
        saveBtn.classList.add('save-btn');

        const parent = taskText.parentNode;
        parent.replaceChild(input, taskText);
        editBtn.replaceWith(saveBtn);

        saveBtn.onclick = () => {
            taskText.innerText = input.value;
            parent.replaceChild(taskText, input);
            saveBtn.replaceWith(editBtn);
        };
    }

    addTaskButton.onclick = addTask;

    taskInput.onkeypress = (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    };
});