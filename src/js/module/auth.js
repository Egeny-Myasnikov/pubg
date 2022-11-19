const { _createEl, $, $$, toggleWindow } = require("./default.js");

module.exports = () => {
  const form = $("[data-form-auth]");
  const nameField = $("[data-form-auth] .form__field--name");
  const passwordField = $("[data-form-auth] .form__field--password");
  const modal = $(".modal");
  const buttonAuth = $$('[data-modal="auth"]');
  const header = $(".header");
  const footer = $(".footer__row");
  const modalTitle = $(".modal__title");
  const modalContent = $(".modal__content");
  const url = "./../../data/admin.json";

  const validate = (e, data) => {
    if (e.target.value === data) {
      e.target.style.borderBottom = "1px solid #00ff00";
    } else {
      e.target.style.borderBottom = "1px solid #ff0000";
    }
  };
  const greeting = (name) => _createEl("p", "text-header", `Привет, ${name}`);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let name = "";
      let pass = "";
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (name === data.name && pass === data.pass) {
          modal.classList.remove("modal--open");
          modalTitle.textContent = "";
          modalContent.innerHTML = "";

          buttonAuth.forEach((btn) => btn.remove());

          header.append(greeting(data.userName));
          footer.append(greeting(data.userName));

          document.body.removeAttribute("style");
        } else {
          alert(`Не верный логин или пароль`);
        }
      });
      nameField.addEventListener("change", (e) => {
        console.log(name);
      });
      passwordField.addEventListener("change", (e) => {
        console.log(pass);
      });
      nameField.addEventListener("input", (e) => {
        name = e.target.value;
        validate(e, data.name);
      });
      passwordField.addEventListener("input", (e) => {
        pass = e.target.value;
        validate(e, data.pass);
      });
    });
};
