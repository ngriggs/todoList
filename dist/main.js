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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTaskModal\": () => (/* binding */ newTaskModal),\n/* harmony export */   \"newListModal\": () => (/* binding */ newListModal)\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar List = function List(title, tasks) {\n  var _this = this;\n\n  _classCallCheck(this, List);\n\n  _defineProperty(this, \"addTask\", function (task) {\n    _this.tasks.push(task);\n  });\n\n  _defineProperty(this, \"renderTasks\", function () {\n    return _this.tasks;\n  });\n\n  _defineProperty(this, \"getList\", function () {\n    return _this;\n  });\n\n  this.title = title;\n  this.tasks = tasks;\n};\n\nvar Task = function Task(title, description, dueDate, priority, notes, done) {\n  _classCallCheck(this, Task);\n\n  this.title = title;\n  this.description = description;\n  this.dueDate = dueDate;\n  this.priority = priority;\n  this.notes = notes;\n  this.done = done;\n};\n\nvar newTaskModal = function newTaskModal() {\n  var element = document.createElement('div');\n  element.setAttribute('id', 'myModal');\n  element.setAttribute('class', 'modal');\n  var modalElement = document.createElement('div');\n  modalElement.setAttribute('class', 'modal-content');\n  var spanElement = document.createElement('span');\n  spanElement.setAttribute('class', 'close');\n  spanElement.innerText = 'Close';\n  var paragraphElement = document.createElement('p');\n  paragraphElement.innerText = 'This is a new task';\n  var inputElement = document.createElement('input');\n  var addTaskButton = document.createElement('button');\n  addTaskButton.innerText = 'Add Task';\n  addTaskButton.addEventListener('click', function () {\n    var projectsList = document.querySelector('.contentDiv');\n    projectsList.appendChild((0,_view__WEBPACK_IMPORTED_MODULE_0__.addTask)(inputElement.value));\n    var thisList = projectsList.parentNode.firstChild.innerText;\n    var newTask = new Task(inputElement.value);\n    console.log(thisList);\n    newList.addTask(newTask);\n    console.log(newList);\n    (0,_view__WEBPACK_IMPORTED_MODULE_0__.removeModal)();\n  });\n  modalElement.addEventListener('keyup', function (event) {\n    var projectsList = document.querySelector('.contentDiv');\n\n    if (event.code === 'Enter') {\n      projectsList.appendChild((0,_view__WEBPACK_IMPORTED_MODULE_0__.addTask)(inputElement.value));\n      var thisList = projectsList.parentNode.firstChild.innerText;\n\n      var _newTask = new Task(inputElement.value);\n\n      newList.addTask(_newTask);\n      console.log(newList);\n      (0,_view__WEBPACK_IMPORTED_MODULE_0__.removeModal)();\n    }\n  });\n  modalElement.appendChild(addTaskButton);\n  modalElement.appendChild(inputElement);\n  modalElement.appendChild(spanElement);\n  modalElement.appendChild(paragraphElement);\n  element.appendChild(modalElement);\n  return element;\n};\n\nvar newListModal = function newListModal() {\n  var element = document.createElement('div');\n  element.setAttribute('id', 'myModal');\n  element.setAttribute('class', 'modal');\n  var modalElement = document.createElement('div');\n  modalElement.setAttribute('class', 'modal-content');\n  var spanElement = document.createElement('span');\n  spanElement.setAttribute('class', 'close');\n  spanElement.innerText = 'Close';\n  var paragraphElement = document.createElement('p');\n  paragraphElement.innerText = 'This is a new List';\n  var inputElement = document.createElement('input');\n  var addTaskButton = document.createElement('button');\n  addTaskButton.innerText = 'Add List';\n  addTaskButton.addEventListener('click', function () {\n    var newListObj = new List(inputElement.value, []);\n    var projectsList = document.querySelector('.lists');\n    var newList = (0,_view__WEBPACK_IMPORTED_MODULE_0__.addList)(inputElement.value);\n    newList.addEventListener('click', function () {\n      (0,_view__WEBPACK_IMPORTED_MODULE_0__.clearList)();\n      console.log(newListObj.renderTasks());\n      container.appendChild((0,_view__WEBPACK_IMPORTED_MODULE_0__.renderList)(newListObj));\n    });\n    projectsList.appendChild(newList);\n    (0,_view__WEBPACK_IMPORTED_MODULE_0__.removeModal)();\n  });\n  modalElement.addEventListener('keyup', function (event) {\n    var newListObj = new List(inputElement.value, []);\n    var projectsList = document.querySelector('.lists');\n    var newList = (0,_view__WEBPACK_IMPORTED_MODULE_0__.addList)(inputElement.value);\n    newList.addEventListener('click', function () {\n      (0,_view__WEBPACK_IMPORTED_MODULE_0__.clearList)();\n      var container = document.querySelector('.container');\n      console.log(newListObj.renderTasks());\n      container.appendChild((0,_view__WEBPACK_IMPORTED_MODULE_0__.renderList)(newListObj));\n    });\n\n    if (event.code === 'Enter') {\n      projectsList.appendChild(newList);\n      (0,_view__WEBPACK_IMPORTED_MODULE_0__.removeModal)();\n    }\n  });\n  modalElement.appendChild(addTaskButton);\n  modalElement.appendChild(inputElement);\n  modalElement.appendChild(spanElement);\n  modalElement.appendChild(paragraphElement);\n  element.appendChild(modalElement);\n  return element;\n};\n\ndocument.body.appendChild((0,_view__WEBPACK_IMPORTED_MODULE_0__.createMenu)());\ndocument.body.appendChild((0,_view__WEBPACK_IMPORTED_MODULE_0__.createContainer)());\nvar container = document.querySelector('.container');\nvar list = [];\nvar newTask = new Task('title', 'description');\nvar newTask2 = new Task('title', 'description');\nlist.push(newTask);\nlist.push(newTask2);\nvar newList = new List('personal', list);\ncontainer.appendChild((0,_view__WEBPACK_IMPORTED_MODULE_0__.renderList)(newList));\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu),\n/* harmony export */   \"createContainer\": () => (/* binding */ createContainer),\n/* harmony export */   \"renderList\": () => (/* binding */ renderList),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"addList\": () => (/* binding */ addList),\n/* harmony export */   \"removeModal\": () => (/* binding */ removeModal),\n/* harmony export */   \"clearList\": () => (/* binding */ clearList)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nvar createMenu = function createMenu() {\n  var element = document.createElement('nav');\n  var header = document.createElement('div');\n  var createNewTaskButton = document.createElement('button');\n  var createNewListButton = document.createElement('button');\n  createNewTaskButton.setAttribute('class', 'taskButton');\n  createNewListButton.setAttribute('class', 'listButton');\n  var listDisplay = document.createElement('div');\n  header.innerHTML = '<h3>Projects</h3>';\n  createNewTaskButton.innerHTML = '<h4>Create a task</h4>';\n  createNewTaskButton.addEventListener('click', function () {\n    createModal('task');\n  });\n  createNewListButton.innerHTML = '<h4>Create a list</h4>';\n  createNewListButton.addEventListener('click', function () {\n    createModal('list');\n  });\n  listDisplay.setAttribute('class', 'lists');\n  element.setAttribute('class', 'navMenu');\n  header.appendChild(createNewTaskButton);\n  header.appendChild(createNewListButton);\n  header.appendChild(listDisplay);\n  element.appendChild(header);\n  return element;\n};\n\nvar createContainer = function createContainer() {\n  var element = document.createElement('div');\n  element.setAttribute('class', 'container');\n  element.innerHTML = '<h1>A new kind of to do application</h1>';\n  return element;\n};\n\nvar createModal = function createModal(type) {\n  if (type == 'task') {\n    document.body.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.newTaskModal)());\n  } else if (type == 'list') {\n    document.body.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.newListModal)());\n  }\n\n  var modal = document.getElementById(\"myModal\");\n  modal.style.display = 'block';\n  var spanElement = document.querySelector('.close');\n  spanElement.addEventListener('click', function () {\n    removeModal();\n  });\n\n  window.onclick = function (event) {\n    if (event.target == modal) {\n      removeModal();\n    }\n  };\n};\n\nvar removeModal = function removeModal() {\n  var node = document.getElementById('myModal');\n  node.querySelectorAll('*').forEach(function (n) {\n    return n.remove();\n  });\n  node.remove();\n};\n\nvar addTask = function addTask(task) {\n  var element = document.createElement('ul');\n  element.setAttribute('class', 'todoList');\n  element.innerText = task;\n  return element;\n};\n\nvar addList = function addList(list) {\n  var element = document.createElement('ul');\n  element.setAttribute('class', 'list');\n  element.innerText = list;\n  return element;\n};\n\nvar renderList = function renderList(list) {\n  var containerDiv = document.createElement('div');\n  var headerDiv = document.createElement('div');\n  var contentDiv = document.createElement('div');\n  containerDiv.setAttribute('class', 'containerDiv');\n  contentDiv.setAttribute('class', 'contentDiv');\n\n  for (var i = 0; i < list.renderTasks().length; i++) {\n    var temp = document.createElement('ul');\n    temp.innerText = list.renderTasks()[i].title;\n    contentDiv.appendChild(temp);\n  }\n\n  headerDiv.innerHTML = '<h3>' + list.title + '</h3>';\n  containerDiv.appendChild(headerDiv);\n  containerDiv.appendChild(contentDiv);\n  return containerDiv;\n};\n\nvar clearList = function clearList() {\n  var existingData = document.querySelector('.containerDiv');\n  existingData.querySelectorAll('*').forEach(function (n) {\n    return n.remove();\n  });\n  existingData.remove();\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/view.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;