/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\nclass List {\n    constructor(title, tasks) {\n        this.title = title\n        this.tasks = tasks\n    }\n\n    addTask = (task) => {\n        this.tasks.push(task)\n    }\n\n    renderTasks = () => {\n        return this.tasks\n        \n    }\n}\n\nclass Task {\n    constructor(title, description, dueDate, priority, notes, done) {\n        this.title = title\n        this.description = description\n        this.dueDate = dueDate\n        this.priority = priority\n        this.notes = notes\n        this.done = done\n    }\n}\n\ndocument.body.appendChild((0,_view__WEBPACK_IMPORTED_MODULE_0__.createMenu)())\ndocument.body.appendChild((0,_view__WEBPACK_IMPORTED_MODULE_0__.createContainer)())\nconst container = document.querySelector('.container')\ncontainer.appendChild((0,_view__WEBPACK_IMPORTED_MODULE_0__.renderList)('Personal'))\n\n\n\n\n\n\n//# sourceURL=webpack://todoList/./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu),\n/* harmony export */   \"createContainer\": () => (/* binding */ createContainer),\n/* harmony export */   \"renderList\": () => (/* binding */ renderList)\n/* harmony export */ });\nconst createMenu = () => {\n    const element = document.createElement('nav')\n    const header = document.createElement('div')\n    const createNewTaskButton = document.createElement('button')\n    const createNewListButton = document.createElement('button')\n    createNewTaskButton.setAttribute('class', 'taskButton')\n    createNewListButton.setAttribute('class', 'listButton')\n\n    const listDisplay = document.createElement('div')\n    header.innerHTML = '<h3>Projects</h3>'\n    createNewTaskButton.innerHTML = '<h4>Create a task</h4>'\n\n    createNewTaskButton.addEventListener('click', () => {\n        createModal('task')\n    })\n\n    createNewListButton.innerHTML = '<h4>Create a list</h4>'\n\n    createNewListButton.addEventListener('click', () => {\n        createModal('list')\n    })\n\n    listDisplay.setAttribute('class', 'lists')\n\n\n    element.setAttribute('class', 'navMenu')\n    header.appendChild(createNewTaskButton)\n    header.appendChild(createNewListButton)\n    header.appendChild(listDisplay)\n    element.appendChild(header)\n    return element\n}\nconst createContainer = () => {\n    const element = document.createElement('div')\n    element.setAttribute('class', 'container')\n    element.innerHTML = '<h1>A new kind of to do application</h1>'\n    return element\n}\n\nconst createModal = (type) => {\n    if (type == 'task') {\n        document.body.appendChild(newTaskModal())\n    } else if (type == 'list') {\n        document.body.appendChild(newListModal())\n    }\n    \n    const modal = document.getElementById(\"myModal\");\n    modal.style.display = 'block'\n    const spanElement = document.querySelector('.close')\n    spanElement.addEventListener('click', () => {\n        removeModal()\n    })\n    window.onclick = (event) => {\n        if (event.target == modal) {\n            removeModal()\n        }\n    }\n}\n\nconst removeModal = () => {\n    var node = document.getElementById('myModal');\n    node.querySelectorAll('*').forEach(n => n.remove());\n    node.remove()\n}\n\nconst newTaskModal = () => {\n    const element = document.createElement('div')\n    element.setAttribute('id', 'myModal')\n    element.setAttribute('class', 'modal')\n    const modalElement = document.createElement('div')\n    modalElement.setAttribute('class', 'modal-content')\n    const spanElement = document.createElement('span')\n    spanElement.setAttribute('class', 'close')\n    spanElement.innerText = 'Close'\n    const paragraphElement = document.createElement('p')\n    paragraphElement.innerText = 'This is a new task'\n    const inputElement = document.createElement('input')\n    const addTaskButton = document.createElement('button')\n    addTaskButton.innerText = 'Add Task'\n    addTaskButton.addEventListener('click', () => {\n        const projectsList = document.querySelector('.contentDiv')\n        const modal = document.getElementById(\"myModal\");\n        projectsList.appendChild(addTask(inputElement.value))\n        removeModal()\n    })\n    modalElement.addEventListener('keyup', (event) => {\n        const projectsList = document.querySelector('.contentDiv')\n        const modal = document.getElementById(\"myModal\");\n        if (event.code === 'Enter') {\n            projectsList.appendChild(addTask(inputElement.value))\n            removeModal()\n        }\n    })\n    modalElement.appendChild(addTaskButton)\n    modalElement.appendChild(inputElement)\n    modalElement.appendChild(spanElement)\n    modalElement.appendChild(paragraphElement)\n    element.appendChild(modalElement)\n    return element\n}\nconst addTask = (task) => {\n    const element = document.createElement('ul')\n    element.setAttribute('class', 'todoList')\n    element.innerText = task\n    return element\n}\n\nconst newListModal = () => {\n    const element = document.createElement('div')\n    element.setAttribute('id', 'myModal')\n    element.setAttribute('class', 'modal')\n    const modalElement = document.createElement('div')\n    modalElement.setAttribute('class', 'modal-content')\n    const spanElement = document.createElement('span')\n    spanElement.setAttribute('class', 'close')\n    spanElement.innerText = 'Close'\n    const paragraphElement = document.createElement('p')\n    paragraphElement.innerText = 'This is a new List'\n    const inputElement = document.createElement('input')\n    const addTaskButton = document.createElement('button')\n    addTaskButton.innerText = 'Add Task'\n    addTaskButton.addEventListener('click', () => {\n        const projectsList = document.querySelector('.lists')\n        const modal = document.getElementById(\"myModal\");\n        projectsList.appendChild(addList(inputElement.value))\n        removeModal()\n    })\n    modalElement.addEventListener('keyup', (event) => {\n        const projectsList = document.querySelector('.lists')\n        const modal = document.getElementById(\"myModal\");\n        if (event.code === 'Enter') {\n            projectsList.appendChild(addList(inputElement.value))\n            removeModal()\n        }\n    })\n    modalElement.appendChild(addTaskButton)\n    modalElement.appendChild(inputElement)\n    modalElement.appendChild(spanElement)\n    modalElement.appendChild(paragraphElement)\n    element.appendChild(modalElement)\n    return element\n}\n\nconst addList = (list) => {\n    const element = document.createElement('ul')\n    element.setAttribute('class', 'list')\n    element.innerText = list\n    return element\n}\n\nconst renderList = (list) => {\n    const containerDiv = document.createElement('div')\n    const headerDiv = document.createElement('div')\n    const contentDiv = document.createElement('div')\n    contentDiv.setAttribute('class', 'contentDiv')\n    for (let i = 0; i < 5; i++) {\n        let temp = document.createElement('ul')\n        temp.innerText = 'hi'\n        contentDiv.appendChild(temp)\n    }\n    headerDiv.innerHTML = '<h3>'+ list +'</h3>'\n\n    containerDiv.appendChild(headerDiv)\n    containerDiv.appendChild(contentDiv)\n    return containerDiv\n}\n\n\n\n//# sourceURL=webpack://todoList/./src/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;