const tab = require("./module/tab.js");
const modalWindow = require("./module/modal-window.js");
const scroll = require("./module/scroll.js");
const changeOS = require("./module/changeOS.js");

scroll();

tab(".tab__btn-visibility");

modalWindow();

changeOS();

const date = new Date();
document.getElementById("date").textContent = date.getFullYear();
