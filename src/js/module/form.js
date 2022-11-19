const { _createEl, setAttributes } = require("./default.js");

const forms = (type) => {
  //creates form elements
  const form = _createEl("form", "form");
  const formInfo = _createEl("div", "form__info");
  const formLabelName = _createEl("label", "form__label form__label--name");
  const formLabelEmail = _createEl("label", "form__label form__label--email");
  const formLabelMessage = _createEl(
    "label",
    "form__label form__label--message"
  );
  const formLabelPassword = _createEl(
    "label",
    "form__label form__label--password"
  );
  const formFieldName = _createEl("input", "form__field form__field--name");
  const formFieldEmail = _createEl("input", "form__field form__field--email");
  const formFieldPassword = _createEl(
    "input",
    "form__field form__field--password"
  );
  const formFieldMessage = _createEl(
    "textarea",
    "form__field form__field--message"
  );
  const p = _createEl("p", "form__text");
  const formButton = _createEl("button", "mbtn form__mbtn");

  //default
  formLabelName.setAttribute("for", "name");
  setAttributes(formFieldName, {
    type: "text",
    name: "name",
    required: "",
    autofocus: "",
  });
  formLabelName.append(formFieldName);

  if (type === "auth") {
    //field name
    setAttributes(formFieldName, {
      autocomplete: "username",
      placeholder: "Ваш логин",
    });
    //password
    formLabelPassword.setAttribute("for", "password");
    setAttributes(formFieldPassword, {
      autocomplete: "current-password",
      type: "password",
      name: "password",
      required: "",
      placeholder: "Пароль",
    });
    //button
    formButton.textContent = "Войти";
    form.setAttribute("data-form-auth", "");
    formLabelPassword.append(formFieldPassword);
    form.append(formLabelName, formLabelPassword, formButton);
  }

  if (type === "buy" || type === "faq") {
    formLabelEmail.append(formFieldEmail);
    formLabelMessage.append(formFieldMessage);
    formInfo.append(formLabelName, formLabelEmail);
    form.append(p, formInfo, formLabelMessage, formButton);
    //field name
    formFieldName.setAttribute("placeholder", "Ваше имя");
    // email
    formLabelEmail.setAttribute("for", "email");
    setAttributes(formFieldEmail, {
      type: "email",
      name: "email",
      required: "",
      placeholder: "Ваш email",
    });
    // message
    formLabelMessage.setAttribute("for", "message");
    setAttributes(formFieldMessage, {
      name: "message",
      placeholder: type === "buy" ? "Комментарий" : "Задайте свой вопрос",
    });
    //button
    formButton.textContent = "Отправить";
    //p
    p.textContent =
      type === "buy"
        ? "Отправьте заявку и мы с вами свяжемся для уточнения деталей"
        : "Задайте свой вопрос и мы ответим на него в ближайшее время";
  }

  return form;
};

module.exports = (data) => {
  if (data.name === "auth") {
    return forms("auth");
  }
  if (data.name === "faq") {
    return forms("faq");
  }
  return forms("buy");
};
