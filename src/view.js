import {newTaskModal, newListModal} from './index.js'

const createMenu = () => {
    const element = document.createElement('nav')
    const header = document.createElement('div')
    const createNewTaskButton = document.createElement('button')
    const createNewListButton = document.createElement('button')
    createNewTaskButton.setAttribute('class', 'taskButton')
    createNewListButton.setAttribute('class', 'listButton')

    const listDisplay = document.createElement('div')
    header.innerHTML = '<h3>Projects</h3>'
    createNewTaskButton.innerHTML = '<h4>Create a task</h4>'

    createNewTaskButton.addEventListener('click', () => {
        createModal('task')
    })

    createNewListButton.innerHTML = '<h4>Create a list</h4>'

    createNewListButton.addEventListener('click', () => {
        createModal('list')
    })

    listDisplay.setAttribute('class', 'lists')


    element.setAttribute('class', 'navMenu')
    header.appendChild(createNewTaskButton)
    header.appendChild(createNewListButton)
    header.appendChild(listDisplay)
    element.appendChild(header)
    return element
}
const createContainer = () => {
    const element = document.createElement('div')
    element.setAttribute('class', 'container')
    element.innerHTML = '<h1>A new kind of to do application</h1>'
    return element
}

const createModal = (type) => {
    if (type == 'task') {
        document.body.appendChild(newTaskModal())
    } else if (type == 'list') {
        document.body.appendChild(newListModal())
    }
    
    const modal = document.getElementById("myModal");
    modal.style.display = 'block'
    const spanElement = document.querySelector('.close')
    spanElement.addEventListener('click', () => {
        removeModal()
    })
    window.onclick = (event) => {
        if (event.target == modal) {
            removeModal()
        }
    }
}

const removeModal = () => {
    var node = document.getElementById('myModal');
    node.querySelectorAll('*').forEach(n => n.remove());
    node.remove()
}

const addTask = (task) => {
    const element = document.createElement('ul')
    element.setAttribute('class', 'todoList')
    element.innerText = task
    return element
}

const addList = (list) => {
    const element = document.createElement('ul')
    element.setAttribute('class', 'list')
    element.innerText = list
    return element
}

const renderList = (list) => {
    const containerDiv = document.createElement('div')
    const headerDiv = document.createElement('div')
    const contentDiv = document.createElement('div')
    containerDiv.setAttribute('class', 'containerDiv')
    contentDiv.setAttribute('class', 'contentDiv')

    for (let i = 0; i < list.renderTasks().length; i++) {
        let temp = document.createElement('ul')
        temp.innerText = list.renderTasks()[i].title
        contentDiv.appendChild(temp)
    }
    headerDiv.innerHTML = '<h3>'+ list.title +'</h3>'

    containerDiv.appendChild(headerDiv)
    containerDiv.appendChild(contentDiv)
    return containerDiv
}

const clearList = () => {
    let existingData = document.querySelector('.containerDiv');
    existingData.querySelectorAll('*').forEach(n => n.remove());
    existingData.remove()
}

export {
    createMenu,
    createContainer,
    renderList,
    addTask,
    addList,
    removeModal,
    clearList
}