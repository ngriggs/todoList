const createContainer = () => {
    const element = document.createElement('div')
    element.setAttribute('class', 'container')
    element.innerHTML = '<h1>A new kind of to do application</h1>'
    return element
}

const createMenu = () => {
    const element = document.createElement('nav')
    const createButton = document.createElement('div')
    createButton.innerHTML = '<h3>New Project</h3>'
    element.setAttribute('class', 'navMenu')
    element.appendChild(createButton)
    return element
}

document.body.appendChild(createMenu())
document.body.appendChild(createContainer())