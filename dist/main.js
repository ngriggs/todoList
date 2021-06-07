/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const createContainer = () => {\n    const element = document.createElement('div')\n    element.setAttribute('class', 'container')\n    element.innerHTML = '<h1>A new kind of to do application</h1>'\n    return element\n}\n\nconst createMenu = () => {\n    const element = document.createElement('nav')\n    const header = document.createElement('div')\n    const createButton = document.createElement('button')\n    header.innerHTML = '<h3>Projects</h3>'\n    createButton.innerHTML = '<h4>New Project</h4>'\n    createButton.addEventListener('click', () => {\n        createButton.appendChild(createProject())\n    })\n    element.setAttribute('class', 'navMenu')\n    header.appendChild(createButton)\n    element.appendChild(header)\n    return element\n}\n\nconst createProject = () => {\n    const element = document.createElement('div')\n    const newProjectForm = document.createElement('input')\n    const addButton = document.createElement('button')\n    const cancelButton = document.createElement('button')\n    addButton.innerText = 'Add'\n    cancelButton.innerText = 'Cancel'\n    newProjectForm.setAttribute('input', 'text')\n    element.appendChild(newProjectForm)\n    element.appendChild(addButton)\n    element.appendChild(cancelButton)\n    return element\n}\n\n\nconst categories = (text) => {\n    const element = document.createElement('ul')\n    element.setAttribute('class', 'categories')\n    element.innerText = text\n    return element\n}\n\nconst projectList = (text) => {\n    const element = document.createElement('ul')\n    element.setAttribute('class', 'projects')\n    element.innerText = text\n    return element\n}\n\nconst todoList = (text) => {\n    const element = document.createElement('ul')\n    element.setAttribute('class', 'todoList')\n    element.innerText = text\n    return element\n}\n\ndocument.body.appendChild(createMenu())\ndocument.body.appendChild(createContainer())\n\n\nconst container = document.querySelector('.container')\nconst newButton = document.createElement('button')\nconst newButton2 = document.createElement('button')\nconst newButton3 = document.createElement('button')\n\nconst menu = document.querySelector('nav')\n\nnewButton.innerHTML = 'New Category'\nnewButton.addEventListener('click', () => {\n    menu.appendChild(categories('some text here!'))\n})\n\nnewButton2.innerHTML = 'New Project'\nnewButton2.addEventListener('click', () => {\n    const categoriesList = document.querySelector('.categories')\n    categoriesList.appendChild(projectList('some text here!'))\n})\n\nnewButton3.innerHTML = 'New To Do'\nnewButton3.addEventListener('click', () => {\n    const projectsList = document.querySelector('.projects')\n    projectsList.appendChild(todoList('some text here!'))\n})\n\ncontainer.appendChild(newButton)\ncontainer.appendChild(newButton2)\ncontainer.appendChild(newButton3)\n\n//# sourceURL=webpack://todoList/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;