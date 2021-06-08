// const createContainer = () => {
//     const element = document.createElement('div')
//     element.setAttribute('class', 'container')
//     element.innerHTML = '<h1>A new kind of to do application</h1>'
//     return element
// }

// const createMenu = () => {
//     const element = document.createElement('nav')
//     const header = document.createElement('div')
//     const createButton = document.createElement('button')
//     header.innerHTML = '<h3>Projects</h3>'
//     createButton.innerHTML = '<h4>New Task</h4>'
//     createButton.addEventListener('click', () => {
//         document.body.appendChild(createProject())
//         const modal = document.getElementById("myModal");
//         modal.style.display = 'block'
//         const spanElement = document.querySelector('.close')
//         spanElement.addEventListener('click', () => {
//             modal.style.display = 'none'
//         })
//         window.onclick = (event) => {
//             if (event.target == modal) {
//                 modal.style.display = 'none'
//             }
//         }


//     })
//     element.setAttribute('class', 'navMenu')
//     header.appendChild(createButton)
//     element.appendChild(header)
//     return element
// }

// const createProject = () => {
//     const element = document.createElement('div')
//     element.setAttribute('id', 'myModal')
//     element.setAttribute('class', 'modal')
//     const modalElement = document.createElement('div')
//     modalElement.setAttribute('class', 'modal-content')
//     const spanElement = document.createElement('span')
//     spanElement.setAttribute('class', 'close')
//     spanElement.innerText = 'Close'
//     const paragraphElement = document.createElement('p')
//     paragraphElement.innerText = 'some text here!'
//     const inputElement = document.createElement('input')
//     const addTaskButton = document.createElement('button')
//     addTaskButton.innerText = 'Add Task'
//     addTaskButton.addEventListener('click', () => {
//         const projectsList = document.querySelector('.contentDiv')
//         const modal = document.getElementById("myModal");
//         projectsList.appendChild(todoList(inputElement.value))
//         modal.style.display = 'none'
//     })
//     modalElement.addEventListener('keyup', (event) => {
//         const projectsList = document.querySelector('.contentDiv')
//         const modal = document.getElementById("myModal");
//         if (event.code === 'Enter') {
//             projectsList.appendChild(todoList(inputElement.value))
//             modal.style.display = 'none'
//         }
//     })
//     modalElement.appendChild(addTaskButton)
//     modalElement.appendChild(inputElement)
//     modalElement.appendChild(spanElement)
//     modalElement.appendChild(paragraphElement)
//     element.appendChild(modalElement)
//     return element
// }


// const categories = (text) => {
//     const element = document.createElement('ul')
//     element.setAttribute('class', 'categories')
//     element.innerText = text
//     return element
// }

// const projectList = (text) => {
//     const element = document.createElement('ul')
//     element.setAttribute('class', 'projects')
//     element.innerText = text
//     return element
// }

// const todoList = (text) => {
//     const element = document.createElement('ul')
//     element.setAttribute('class', 'todoList')
//     element.innerText = text
//     return element
// }

// document.body.appendChild(createMenu())
// document.body.appendChild(createContainer())


// const container = document.querySelector('.container')
// const newButton = document.createElement('button')
// const newButton2 = document.createElement('button')
// const newButton3 = document.createElement('button')

// const menu = document.querySelector('nav')

// newButton.innerHTML = 'New Category'
// newButton.addEventListener('click', () => {
//     menu.appendChild(categories('some text here!'))
// })

// newButton2.innerHTML = 'New Project'
// newButton2.addEventListener('click', () => {
//     const categoriesList = document.querySelector('.categories')
//     categoriesList.appendChild(projectList('some text here!'))
// })

// newButton3.innerHTML = 'New To Do'
// newButton3.addEventListener('click', () => {
//     const projectsList = document.querySelector('.projects')
//     projectsList.appendChild(todoList('some text here!'))
// })

// const displayProjectTaskList = () => {
//     const containerDiv = document.createElement('div')
//     const headerDiv = document.createElement('div')
//     const contentDiv = document.createElement('div')
//     contentDiv.setAttribute('class', 'contentDiv')
//     for (i = 0; i < 5; i++) {
//         let temp = document.createElement('ul')
//         temp.innerText = 'hi'
//         contentDiv.appendChild(temp)
//     }
//     headerDiv.innerHTML = '<h3>Personal</h3>'

//     containerDiv.appendChild(headerDiv)
//     containerDiv.appendChild(contentDiv)
//     return containerDiv
// }
// container.appendChild(newButton)
// container.appendChild(newButton2)
// container.appendChild(newButton3)
// container.appendChild(displayProjectTaskList())





const lists = [[]]

const addTask = (task) => {
    const element = document.createElement('ul')
    element.setAttribute('class', 'todoList')
    element.innerText = task
    return element
}

const addList = (list) => {
    lists.push(list)

}

const renderTask = (list) => {

}

const editTask = () => {

}

const createMenu2 = () => {
    const element = document.createElement('nav')

    const header = document.createElement('div')

    const createNewTaskButton = document.createElement('button')

    const createNewListButton = document.createElement('button')

    header.innerHTML = '<h3>Projects</h3>'

    createNewTaskButton.innerHTML = '<h4>Create a task</h4>'

    createNewTaskButton.addEventListener('click', () => {
        document.body.appendChild(newTaskModal())
        const modal = document.getElementById("myModal");
        modal.style.display = 'block'
        const spanElement = document.querySelector('.close')
        spanElement.addEventListener('click', () => {
            modal.style.display = 'none'
        })
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none'
            }
        }
    })

    createNewListButton.innerHTML = '<h4>Create a list</h4>'

    createNewListButton.addEventListener('click', () => {
        document.body.appendChild(newTaskModal())
        const modal = document.getElementById("myModal");
        modal.style.display = 'block'
        const spanElement = document.querySelector('.close')
        spanElement.addEventListener('click', () => {
            modal.style.display = 'none'
        })
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none'
            }
        }
    })

    element.setAttribute('class', 'navMenu')
    header.appendChild(createNewTaskButton)
    header.appendChild(createNewListButton)
    element.appendChild(header)
    return element
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
    paragraphElement.innerText = 'some text here!'
    const inputElement = document.createElement('input')
    const addTaskButton = document.createElement('button')
    addTaskButton.innerText = 'Add Task'
    addTaskButton.addEventListener('click', () => {
        const projectsList = document.querySelector('.contentDiv')
        const modal = document.getElementById("myModal");
        projectsList.appendChild(todoList(inputElement.value))
        modal.style.display = 'none'
    })
    modalElement.addEventListener('keyup', (event) => {
        const projectsList = document.querySelector('.contentDiv')
        const modal = document.getElementById("myModal");
        if (event.code === 'Enter') {
            projectsList.appendChild(addTask(inputElement.value))
            modal.style.display = 'none'
        }
    })
    modalElement.appendChild(addTaskButton)
    modalElement.appendChild(inputElement)
    modalElement.appendChild(spanElement)
    modalElement.appendChild(paragraphElement)
    element.appendChild(modalElement)
    return element
}

const createContainer = () => {
    const element = document.createElement('div')
    element.setAttribute('class', 'container')
    element.innerHTML = '<h1>A new kind of to do application</h1>'
    return element
}

const renderList = (list) => {
    const containerDiv = document.createElement('div')
    const headerDiv = document.createElement('div')
    const contentDiv = document.createElement('div')
    contentDiv.setAttribute('class', 'contentDiv')
    for (i = 0; i < 5; i++) {
        let temp = document.createElement('ul')
        temp.innerText = 'hi'
        contentDiv.appendChild(temp)
    }
    headerDiv.innerHTML = '<h3>'+ list +'</h3>'

    containerDiv.appendChild(headerDiv)
    containerDiv.appendChild(contentDiv)
    return containerDiv
}

document.body.appendChild(createMenu2())
document.body.appendChild(createContainer())
const container = document.querySelector('.container')
container.appendChild(renderList('Personal'))