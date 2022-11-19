const { _createEl, $, $$ } = require("./default.js");

module.exports = () => {
  const btnsFunctional = $$(".functional-block__mbtns .os-mbtns__mbtn");
  const btnsTariffs = $$(".tariffs-block__mbtns .os-mbtns__mbtn");
  const changeOS = (els) => {
    els.forEach((el) =>
      el.addEventListener("click", (e) => {
        els.forEach((e) => e.classList.remove("os-mbtns__mbtn--active"));
        el.classList.add("os-mbtns__mbtn--active");
        console.log(btn);
      })
    );
  };
  changeOS(btnsFunctional);
  changeOS(btnsTariffs);
};
