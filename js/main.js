/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const tab = __webpack_require__(/*! ./module/tab.js */ \"./src/js/module/tab.js\");\r\nconst modalWindow = __webpack_require__(/*! ./module/modal-window.js */ \"./src/js/module/modal-window.js\");\r\nconst scroll = __webpack_require__(/*! ./module/scroll.js */ \"./src/js/module/scroll.js\");\r\nconst changeOS = __webpack_require__(/*! ./module/changeOS.js */ \"./src/js/module/changeOS.js\");\r\n\r\nscroll();\r\n\r\ntab(\".tab__btn-visibility\");\r\n\r\nmodalWindow();\r\n\r\nchangeOS();\r\n\r\nconst date = new Date();\r\ndocument.getElementById(\"date\").textContent = date.getFullYear();\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/auth.js":
/*!*******************************!*\
  !*** ./src/js/module/auth.js ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const { _createEl, $, $$, toggleWindow } = __webpack_require__(/*! ./default.js */ \"./src/js/module/default.js\");\r\n\r\nmodule.exports = () => {\r\n  const form = $(\"[data-form-auth]\");\r\n  const nameField = $(\"[data-form-auth] .form__field--name\");\r\n  const passwordField = $(\"[data-form-auth] .form__field--password\");\r\n  const modal = $(\".modal\");\r\n  const buttonAuth = $$('[data-modal=\"auth\"]');\r\n  const header = $(\".header\");\r\n  const footer = $(\".footer__row\");\r\n  const modalTitle = $(\".modal__title\");\r\n  const modalContent = $(\".modal__content\");\r\n  const url = \"./../../data/admin.json\";\r\n\r\n  const validate = (e, data) => {\r\n    if (e.target.value === data) {\r\n      e.target.style.borderBottom = \"1px solid #00ff00\";\r\n    } else {\r\n      e.target.style.borderBottom = \"1px solid #ff0000\";\r\n    }\r\n  };\r\n  const greeting = (name) => _createEl(\"p\", \"text-header\", `Привет, ${name}`);\r\n\r\n  fetch(url)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      let name = \"\";\r\n      let pass = \"\";\r\n      form.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        if (name === data.name && pass === data.pass) {\r\n          modal.classList.remove(\"modal--open\");\r\n          modalTitle.textContent = \"\";\r\n          modalContent.innerHTML = \"\";\r\n\r\n          buttonAuth.forEach((btn) => btn.remove());\r\n\r\n          header.append(greeting(data.userName));\r\n          footer.append(greeting(data.userName));\r\n\r\n          document.body.removeAttribute(\"style\");\r\n        } else {\r\n          alert(`Не верный логин или пароль`);\r\n        }\r\n      });\r\n      nameField.addEventListener(\"change\", (e) => {\r\n        console.log(name);\r\n      });\r\n      passwordField.addEventListener(\"change\", (e) => {\r\n        console.log(pass);\r\n      });\r\n      nameField.addEventListener(\"input\", (e) => {\r\n        name = e.target.value;\r\n        validate(e, data.name);\r\n      });\r\n      passwordField.addEventListener(\"input\", (e) => {\r\n        pass = e.target.value;\r\n        validate(e, data.pass);\r\n      });\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/auth.js?");

/***/ }),

/***/ "./src/js/module/changeOS.js":
/*!***********************************!*\
  !*** ./src/js/module/changeOS.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const { _createEl, $, $$ } = __webpack_require__(/*! ./default.js */ \"./src/js/module/default.js\");\r\n\r\nmodule.exports = () => {\r\n  const btnsFunctional = $$(\".functional-block__mbtns .os-mbtns__mbtn\");\r\n  const btnsTariffs = $$(\".tariffs-block__mbtns .os-mbtns__mbtn\");\r\n  const changeOS = (els) => {\r\n    els.forEach((el) =>\r\n      el.addEventListener(\"click\", (e) => {\r\n        els.forEach((e) => e.classList.remove(\"os-mbtns__mbtn--active\"));\r\n        el.classList.add(\"os-mbtns__mbtn--active\");\r\n        console.log(btn);\r\n      })\r\n    );\r\n  };\r\n  changeOS(btnsFunctional);\r\n  changeOS(btnsTariffs);\r\n};\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/changeOS.js?");

/***/ }),

/***/ "./src/js/module/default.js":
/*!**********************************!*\
  !*** ./src/js/module/default.js ***!
  \**********************************/
/***/ (function(module) {

eval("module.exports = {\r\n  _createEl: (el, cls, text = \"\") => {\r\n    const element = document.createElement(el);\r\n    cls && element.setAttribute(\"class\", cls);\r\n    element.textContent = text;\r\n    return element;\r\n  },\r\n  setAttributes: (el, attrs) => {\r\n    for (let key in attrs) {\r\n      el.setAttribute(key, attrs[key]);\r\n    }\r\n  },\r\n  $: (selector) => document.querySelector(selector),\r\n  $$: (selector) => document.querySelectorAll(selector),\r\n};\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/default.js?");

/***/ }),

/***/ "./src/js/module/form.js":
/*!*******************************!*\
  !*** ./src/js/module/form.js ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const { _createEl, setAttributes } = __webpack_require__(/*! ./default.js */ \"./src/js/module/default.js\");\r\n\r\nconst forms = (type) => {\r\n  //creates form elements\r\n  const form = _createEl(\"form\", \"form\");\r\n  const formInfo = _createEl(\"div\", \"form__info\");\r\n  const formLabelName = _createEl(\"label\", \"form__label form__label--name\");\r\n  const formLabelEmail = _createEl(\"label\", \"form__label form__label--email\");\r\n  const formLabelMessage = _createEl(\r\n    \"label\",\r\n    \"form__label form__label--message\"\r\n  );\r\n  const formLabelPassword = _createEl(\r\n    \"label\",\r\n    \"form__label form__label--password\"\r\n  );\r\n  const formFieldName = _createEl(\"input\", \"form__field form__field--name\");\r\n  const formFieldEmail = _createEl(\"input\", \"form__field form__field--email\");\r\n  const formFieldPassword = _createEl(\r\n    \"input\",\r\n    \"form__field form__field--password\"\r\n  );\r\n  const formFieldMessage = _createEl(\r\n    \"textarea\",\r\n    \"form__field form__field--message\"\r\n  );\r\n  const p = _createEl(\"p\", \"form__text\");\r\n  const formButton = _createEl(\"button\", \"mbtn form__mbtn\");\r\n\r\n  //default\r\n  formLabelName.setAttribute(\"for\", \"name\");\r\n  setAttributes(formFieldName, {\r\n    type: \"text\",\r\n    name: \"name\",\r\n    required: \"\",\r\n    autofocus: \"\",\r\n  });\r\n  formLabelName.append(formFieldName);\r\n\r\n  if (type === \"auth\") {\r\n    //field name\r\n    setAttributes(formFieldName, {\r\n      autocomplete: \"username\",\r\n      placeholder: \"Ваш логин\",\r\n    });\r\n    //password\r\n    formLabelPassword.setAttribute(\"for\", \"password\");\r\n    setAttributes(formFieldPassword, {\r\n      autocomplete: \"current-password\",\r\n      type: \"password\",\r\n      name: \"password\",\r\n      required: \"\",\r\n      placeholder: \"Пароль\",\r\n    });\r\n    //button\r\n    formButton.textContent = \"Войти\";\r\n    form.setAttribute(\"data-form-auth\", \"\");\r\n    formLabelPassword.append(formFieldPassword);\r\n    form.append(formLabelName, formLabelPassword, formButton);\r\n  }\r\n\r\n  if (type === \"buy\" || type === \"faq\") {\r\n    formLabelEmail.append(formFieldEmail);\r\n    formLabelMessage.append(formFieldMessage);\r\n    formInfo.append(formLabelName, formLabelEmail);\r\n    form.append(p, formInfo, formLabelMessage, formButton);\r\n    //field name\r\n    formFieldName.setAttribute(\"placeholder\", \"Ваше имя\");\r\n    // email\r\n    formLabelEmail.setAttribute(\"for\", \"email\");\r\n    setAttributes(formFieldEmail, {\r\n      type: \"email\",\r\n      name: \"email\",\r\n      required: \"\",\r\n      placeholder: \"Ваш email\",\r\n    });\r\n    // message\r\n    formLabelMessage.setAttribute(\"for\", \"message\");\r\n    setAttributes(formFieldMessage, {\r\n      name: \"message\",\r\n      placeholder: type === \"buy\" ? \"Комментарий\" : \"Задайте свой вопрос\",\r\n    });\r\n    //button\r\n    formButton.textContent = \"Отправить\";\r\n    //p\r\n    p.textContent =\r\n      type === \"buy\"\r\n        ? \"Отправьте заявку и мы с вами свяжемся для уточнения деталей\"\r\n        : \"Задайте свой вопрос и мы ответим на него в ближайшее время\";\r\n  }\r\n\r\n  return form;\r\n};\r\n\r\nmodule.exports = (data) => {\r\n  if (data.name === \"auth\") {\r\n    return forms(\"auth\");\r\n  }\r\n  if (data.name === \"faq\") {\r\n    return forms(\"faq\");\r\n  }\r\n  return forms(\"buy\");\r\n};\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/form.js?");

/***/ }),

/***/ "./src/js/module/modal-window.js":
/*!***************************************!*\
  !*** ./src/js/module/modal-window.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const form = __webpack_require__(/*! ./form.js */ \"./src/js/module/form.js\");\r\nconst auth = __webpack_require__(/*! ./auth.js */ \"./src/js/module/auth.js\");\r\nconst { _createEl, $, $$ } = __webpack_require__(/*! ./default.js */ \"./src/js/module/default.js\");\r\n\r\nmodule.exports = () => {\r\n  const url = \"./../../data/modal-content.json\";\r\n  const wrapper = $(\".wrapper\");\r\n  const modal = _createEl(\"div\", \"modal\");\r\n  const btnModalClose = _createEl(\"span\", \"modal__close\");\r\n  const modalInner = _createEl(\"div\", \"modal__inner\");\r\n  const modalTitle = _createEl(\"h4\", \"modal__title\");\r\n  const modalContent = _createEl(\"div\", \"modal__content\");\r\n  modal.append(modalInner);\r\n  modalInner.append(btnModalClose, modalTitle, modalContent);\r\n  wrapper.append(modal);\r\n\r\n  const toggleWindow = (toggle) => {\r\n    if (toggle === \"open\") {\r\n      modal.classList.add(\"modal--open\");\r\n      document.body.style.overflowY = \"hidden\";\r\n    } else if (toggle === \"close\") {\r\n      modal.classList.remove(\"modal--open\");\r\n      document.body.removeAttribute(\"style\");\r\n      modalTitle.textContent = \"\";\r\n      modalContent.innerHTML = \"\";\r\n    }\r\n  };\r\n  $$(\"[data-modal]\").forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      fetch(url)\r\n        .then((response) => response.json())\r\n        .then((data) => {\r\n          switch (btn.dataset.modal) {\r\n            case \"auth\":\r\n              modalTitle.textContent = data.auth.title;\r\n              modalContent.insertAdjacentElement(\"afterbegin\", form(data.auth));\r\n              auth();\r\n              break;\r\n            case \"buy\":\r\n              modalTitle.textContent = data.buy.title;\r\n              modalContent.insertAdjacentElement(\"afterbegin\", form(data.buy));\r\n              break;\r\n            case \"buyRegular\":\r\n              modalTitle.textContent = data.buy.regular.title;\r\n              modalContent.insertAdjacentElement(\"afterbegin\", form(data.buy));\r\n              break;\r\n            case \"buyStandard\":\r\n              modalTitle.textContent = data.buy.standard.title;\r\n              modalContent.insertAdjacentElement(\"afterbegin\", form(data.buy));\r\n              break;\r\n            case \"buyPro\":\r\n              modalTitle.textContent = data.buy.pro.title;\r\n              modalContent.insertAdjacentElement(\"afterbegin\", form(data.buy));\r\n              break;\r\n            case \"faq\":\r\n              modalTitle.textContent = data.faq.title;\r\n              modalContent.insertAdjacentElement(\"afterbegin\", form(data.faq));\r\n              break;\r\n            case \"video\":\r\n              modalTitle.textContent = data.video.title;\r\n              modalContent.innerHTML = data.video.content;\r\n              break;\r\n\r\n            default:\r\n              modalTitle.textContent = \"PUBG\";\r\n              modalContent.insertAdjacentElement(\"afterbegin\", form(data.buy));\r\n              break;\r\n          }\r\n        })\r\n        .catch((err) => {\r\n          if (err) {\r\n            modalTitle.textContent = `Упс... Ошибка :(`;\r\n            modalContent.innerHTML = `Ошибка: ${err}`;\r\n          }\r\n        })\r\n        .finally(toggleWindow(\"open\"));\r\n    });\r\n  });\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"modal\")) {\r\n      toggleWindow(\"close\");\r\n      return;\r\n    }\r\n    if (e.target.classList.contains(\"modal__close\")) {\r\n      toggleWindow(\"close\");\r\n      return;\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/modal-window.js?");

/***/ }),

/***/ "./src/js/module/scroll.js":
/*!*********************************!*\
  !*** ./src/js/module/scroll.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const { $$ } = __webpack_require__(/*! ./default.js */ \"./src/js/module/default.js\");\r\nmodule.exports = () => {\r\n  $$(\".nav-link\").forEach((link) => {\r\n    const href = link.getAttribute(\"href\");\r\n    const id = href.slice(1, href.length);\r\n    const el = document.getElementById(id);\r\n    link.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      el.scrollIntoView({ behavior: \"smooth\" });\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/scroll.js?");

/***/ }),

/***/ "./src/js/module/tab.js":
/*!******************************!*\
  !*** ./src/js/module/tab.js ***!
  \******************************/
/***/ (function(module) {

eval("module.exports = (button) => {\r\n  const btns = document.querySelectorAll(button);\r\n\r\n  function switchVisibility() {\r\n    const tabBody = this.nextElementSibling;\r\n    !tabBody.style.maxHeight || tabBody.style.maxHeight === \"0px\"\r\n      ? (tabBody.style.maxHeight = `${tabBody.scrollHeight}px`)\r\n      : (tabBody.style.maxHeight = `0px`);\r\n    this.classList.toggle(\"active\");\r\n  }\r\n  btns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", switchVisibility);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/tab.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;