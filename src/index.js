import {createMenu, createContainer, renderList, addTask, addList, removeModal, clearList} from './view'

class List {
    constructor(title, tasks) {
        this.title = title
        this.tasks = tasks
    }

    addTask = (task) => {
        this.tasks.push(task)
    }

    renderTasks = () => {
        return this.tasks
        
    }
}

class Task {
    constructor(title, description, dueDate, priority, notes, done) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.done = done
    }
}

const newTaskModal = () => {
    const element = document.createElement('div')
    element.setAttribute('id', 'myModal')
    element.setAttribute('class', 'modal')
    const modalElement = document.createElement('div')
    modalElement.setAttribute('class', 'modal-content')
    const spanElement = document.createElement('span')
    spanElement.setAttribute('class', 'close')
    spanElement.innerText = 'Close'
    const paragraphElement = document.createElement('p')
    paragraphElement.innerText = 'This is a new task'
    const inputElement = document.createElement('input')
    const addTaskButton = document.createElement('button')
    addTaskButton.innerText = 'Add Task'
    addTaskButton.addEventListener('click', () => {
        const projectsList = document.querySelector('.contentDiv')
        projectsList.appendChild(addTask(inputElement.value))
        let thisList = projectsList.parentNode.firstChild.innerText
        let newTask = new Task(inputElement.value)
        newList.addTask(newTask)
        console.log(newList)
        removeModal()
    })
    modalElement.addEventListener('keyup', (event) => {
        const projectsList = document.querySelector('.contentDiv')
        if (event.code === 'Enter') {
            projectsList.appendChild(addTask(inputElement.value))
            let thisList = projectsList.parentNode.firstChild.innerText
            let newTask = new Task(inputElement.value)
            newList.addTask(newTask)
            console.log(newList)
            removeModal()
        }
    })
    modalElement.appendChild(addTaskButton)
    modalElement.appendChild(inputElement)
    modalElement.appendChild(spanElement)
    modalElement.appendChild(paragraphElement)
    element.appendChild(modalElement)
    return element
}
const newListModal = () => {
    const element = document.createElement('div')
    element.setAttribute('id', 'myModal')
    element.setAttribute('class', 'modal')
    const modalElement = document.createElement('div')
    modalElement.setAttribute('class', 'modal-content')
    const spanElement = document.createElement('span')
    spanElement.setAttribute('class', 'close')
    spanElement.innerText = 'Close'
    const paragraphElement = document.createElement('p')
    paragraphElement.innerText = 'This is a new List'
    const inputElement = document.createElement('input')
    const addTaskButton = document.createElement('button')
    addTaskButton.innerText = 'Add List'
    addTaskButton.addEventListener('click', () => {
        let newListObj = new List(inputElement.value, [])
        const projectsList = document.querySelector('.lists')
        const newList = addList(inputElement.value)
        newList.addEventListener('click', () => {
            clearList()
            console.log(newListObj.renderTasks())
            container.appendChild(renderList(newListObj))
        })
        projectsList.appendChild(newList)
        removeModal()
    })
    modalElement.addEventListener('keyup', (event) => {
        let newListObj = new List(inputElement.value, [])
        const projectsList = document.querySelector('.lists')
        const newList = addList(inputElement.value)
        newList.addEventListener('click', () => {
            clearList()
            let container = document.querySelector('.container')
            console.log(newListObj.renderTasks())
            container.appendChild(renderList(newListObj))
        })
        if (event.code === 'Enter') {
            projectsList.appendChild(newList)
            removeModal()
        }
    })
    modalElement.appendChild(addTaskButton)
    modalElement.appendChild(inputElement)
    modalElement.appendChild(spanElement)
    modalElement.appendChild(paragraphElement)
    element.appendChild(modalElement)
    return element
}

document.body.appendChild(createMenu())
document.body.appendChild(createContainer())
const container = document.querySelector('.container')


let list = []
let newTask = new Task('title', 'description')
let newTask2 = new Task('title', 'description')
list.push(newTask)
list.push(newTask2)
let newList = new List('personal', list)

container.appendChild(renderList(newList))



export {
    newTaskModal,
    newListModal
}
