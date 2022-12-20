'use strict'
var idarray = [];
const createIcon = (type) => {
    const icon = document.createElement('i');
    icon.classList = `fas ${type}`;
    return icon;
};
const createTaskElement = (title) => {
    const task = document.createElement('li');
    task.id = Date.now();
    idarray.push(task.id);
    const iconCircle = createIcon('fa-circle');
    const iconPen = createIcon('fa-pen');
    const iconTrash = createIcon('fa-trash');
    const actions = document.createElement('div');
    actions.classList = 'actions';
    actions.appendChild(iconPen);
    actions.appendChild(iconTrash);
    const text = document.createElement('p');
    text.classList = 'text';
    text.textContent = title;
    task.appendChild(iconCircle);
    task.appendChild(text);
    task.appendChild(text);
    task.appendChild(actions);
    return task
}
const tasksList = document.getElementById('tasks');
const buttonplus = document.getElementById('boton-enter');
buttonplus.addEventListener('click', () => {
    const inputtask = document.getElementById('input').value;
    tasksList.appendChild(createTaskElement(inputtask));
})
tasksList.addEventListener('click', (e) => {
    const elementparent = e.target.parentElement.parentElement
    if (e.target.classList.value === "fas fa-trash") {
        elementparent.remove()
    }
    console.log(e.target.parentElement.parentElement.querySelector('p'))

    if (e.target.classList.value === "fas fa-pen") {
        const newedit = prompt("Inserte su modificacion");
        console.log(newedit)
        e.target.parentElement.parentElement.querySelector('p').innerText = newedit
    }
})

