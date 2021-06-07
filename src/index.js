const createContainer = () => {
    const element = document.createElement('div')
    element.setAttribute('class', 'container')
    element.innerHTML = '<h1>A new kind of to do application</h1>'
    return element
}

const createMenu = () => {
    const element = document.createElement('nav')
    const header = document.createElement('div')
    const createButton = document.createElement('button')
    header.innerHTML = '<h3>Projects</h3>'
    createButton.innerHTML = '<h4>New Project</h4>'
    createButton.addEventListener('click', () => {
        createButton.appendChild(createProject())
    })
    element.setAttribute('class', 'navMenu')
    header.appendChild(createButton)
    element.appendChild(header)
    return element
}

const createProject = () => {
    const element = document.createElement('div')
    const newProjectForm = document.createElement('input')
    const addButton = document.createElement('button')
    const cancelButton = document.createElement('button')
    addButton.innerText = 'Add'
    cancelButton.innerText = 'Cancel'
    newProjectForm.setAttribute('input', 'text')
    element.appendChild(newProjectForm)
    element.appendChild(addButton)
    element.appendChild(cancelButton)
    return element
}


const categories = (text) => {
    const element = document.createElement('ul')
    element.setAttribute('class', 'categories')
    element.innerText = text
    return element
}

const projectList = (text) => {
    const element = document.createElement('ul')
    element.setAttribute('class', 'projects')
    element.innerText = text
    return element
}

const todoList = (text) => {
    const element = document.createElement('ul')
    element.setAttribute('class', 'todoList')
    element.innerText = text
    return element
}

document.body.appendChild(createMenu())
document.body.appendChild(createContainer())


const container = document.querySelector('.container')
const newButton = document.createElement('button')
const newButton2 = document.createElement('button')
const newButton3 = document.createElement('button')

const menu = document.querySelector('nav')

newButton.innerHTML = 'New Category'
newButton.addEventListener('click', () => {
    menu.appendChild(categories('some text here!'))
})

newButton2.innerHTML = 'New Project'
newButton2.addEventListener('click', () => {
    const categoriesList = document.querySelector('.categories')
    categoriesList.appendChild(projectList('some text here!'))
})

newButton3.innerHTML = 'New To Do'
newButton3.addEventListener('click', () => {
    const projectsList = document.querySelector('.projects')
    projectsList.appendChild(todoList('some text here!'))
})

container.appendChild(newButton)
container.appendChild(newButton2)
container.appendChild(newButton3)