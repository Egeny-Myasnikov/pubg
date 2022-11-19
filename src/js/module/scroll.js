const { $$ } = require("./default.js");
module.exports = () => {
  $$(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    const id = href.slice(1, href.length);
    const el = document.getElementById(id);
    link.addEventListener("click", (e) => {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    });
  });
};
