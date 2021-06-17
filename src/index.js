import {createMenu, createContainer, renderList, addTask, addList, removeModal, clearList} from './view';

class List {
    constructor(title, tasks) {
        this.title = title;
        this.tasks = tasks;
    };

    addTask = (task) => {
        this.tasks.push(task);
    };

    renderTasks = () => {
        return this.tasks
    }

    getList = () => {
        return this
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
        const test = myStorage.getItem(thisList)
        console.log(test)
        let newTask = new Task(inputElement.value)
        removeModal()
    })
    modalElement.addEventListener('keyup', (event) => {
        const projectsList = document.querySelector('.contentDiv')
        if (event.code === 'Enter') {
            projectsList.appendChild(addTask(inputElement.value))
            let thisList = projectsList.parentNode.firstChild.innerText
            let newTask = new Task(inputElement.value)
            let test = JSON.parse(myStorage.getItem(thisList))
            test.tasks.push(newTask)
            console.log(test)
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
    const addListButton = document.createElement('button')
    addListButton.innerText = 'Add List'
    addListButton.addEventListener('click', () => {
        let newListObj = new List(inputElement.value, [])
        let stringifiedNewListObj = JSON.stringify(newListObj)
        const projectsList = document.querySelector('.lists')
        const newList = addList(inputElement.value)
        projectsList.appendChild(newList)
        myStorage.setItem(inputElement.value, stringifiedNewListObj)
        console.log(JSON.parse(myStorage.getItem(inputElement.value)) + 'my storage')
        newList.addEventListener('click', () => {
            clearList()
            let container = document.querySelector('.container')
            container.appendChild(renderList(newListObj))
            let test = document.querySelector('.containerDiv')
            let test2 = myStorage.getItem(test.innerText)
            console.log(test2)
        })
        
        removeModal()
    })
    modalElement.addEventListener('keyup', (event) => {
        let newListObj = new List(inputElement.value, [])
        let stringifiedNewListObj = JSON.stringify(newListObj)
        const projectsList = document.querySelector('.lists')
        const newList = addList(inputElement.value)
        newList.addEventListener('click', () => {
            clearList()
            console.log(JSON.parse(stringifiedNewListObj))
            console.log(newListObj.renderTasks())
            let container = document.querySelector('.container')
            container.appendChild(renderList(newListObj))
        })
        if (event.code === 'Enter') {
            projectsList.appendChild(newList)
            myStorage.setItem(inputElement.value, stringifiedNewListObj)
            removeModal()
        }
    })
    modalElement.appendChild(addListButton)
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
const myStorage = window.localStorage



export {
    newTaskModal,
    newListModal
}
