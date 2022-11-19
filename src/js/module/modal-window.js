const form = require("./form.js");
const auth = require("./auth.js");
const { _createEl, $, $$ } = require("./default.js");

module.exports = () => {
  const url = "./../../data/modal-content.json";
  const wrapper = $(".wrapper");
  const modal = _createEl("div", "modal");
  const btnModalClose = _createEl("span", "modal__close");
  const modalInner = _createEl("div", "modal__inner");
  const modalTitle = _createEl("h4", "modal__title");
  const modalContent = _createEl("div", "modal__content");
  modal.append(modalInner);
  modalInner.append(btnModalClose, modalTitle, modalContent);
  wrapper.append(modal);

  const toggleWindow = (toggle) => {
    if (toggle === "open") {
      modal.classList.add("modal--open");
      document.body.style.overflowY = "hidden";
    } else if (toggle === "close") {
      modal.classList.remove("modal--open");
      document.body.removeAttribute("style");
      modalTitle.textContent = "";
      modalContent.innerHTML = "";
    }
  };
  $$("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          switch (btn.dataset.modal) {
            case "auth":
              modalTitle.textContent = data.auth.title;
              modalContent.insertAdjacentElement("afterbegin", form(data.auth));
              auth();
              break;
            case "buy":
              modalTitle.textContent = data.buy.title;
              modalContent.insertAdjacentElement("afterbegin", form(data.buy));
              break;
            case "buyRegular":
              modalTitle.textContent = data.buy.regular.title;
              modalContent.insertAdjacentElement("afterbegin", form(data.buy));
              break;
            case "buyStandard":
              modalTitle.textContent = data.buy.standard.title;
              modalContent.insertAdjacentElement("afterbegin", form(data.buy));
              break;
            case "buyPro":
              modalTitle.textContent = data.buy.pro.title;
              modalContent.insertAdjacentElement("afterbegin", form(data.buy));
              break;
            case "faq":
              modalTitle.textContent = data.faq.title;
              modalContent.insertAdjacentElement("afterbegin", form(data.faq));
              break;
            case "video":
              modalTitle.textContent = data.video.title;
              modalContent.innerHTML = data.video.content;
              break;

            default:
              modalTitle.textContent = "PUBG";
              modalContent.insertAdjacentElement("afterbegin", form(data.buy));
              break;
          }
        })
        .catch((err) => {
          if (err) {
            modalTitle.textContent = `Упс... Ошибка :(`;
            modalContent.innerHTML = `Ошибка: ${err}`;
          }
        })
        .finally(toggleWindow("open"));
    });
  });
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      toggleWindow("close");
      return;
    }
    if (e.target.classList.contains("modal__close")) {
      toggleWindow("close");
      return;
    }
  });
};
