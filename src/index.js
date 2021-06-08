import {createMenu, createContainer, renderList} from './view'

export class List {
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

export class Task {
    constructor(title, description, dueDate, priority, notes, done) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.done = done
    }
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

