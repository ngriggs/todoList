import {createMenu, createContainer, renderList} from './view'

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

document.body.appendChild(createMenu())
document.body.appendChild(createContainer())
const container = document.querySelector('.container')
container.appendChild(renderList('Personal'))




