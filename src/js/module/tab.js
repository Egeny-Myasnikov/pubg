module.exports = (button) => {
  const btns = document.querySelectorAll(button);

  function switchVisibility() {
    const tabBody = this.nextElementSibling;
    !tabBody.style.maxHeight || tabBody.style.maxHeight === "0px"
      ? (tabBody.style.maxHeight = `${tabBody.scrollHeight}px`)
      : (tabBody.style.maxHeight = `0px`);
    this.classList.toggle("active");
  }
  btns.forEach((btn) => {
    btn.addEventListener("click", switchVisibility);
  });
};
