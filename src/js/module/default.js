module.exports = {
  _createEl: (el, cls, text = "") => {
    const element = document.createElement(el);
    cls && element.setAttribute("class", cls);
    element.textContent = text;
    return element;
  },
  setAttributes: (el, attrs) => {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  },
  $: (selector) => document.querySelector(selector),
  $$: (selector) => document.querySelectorAll(selector),
};
