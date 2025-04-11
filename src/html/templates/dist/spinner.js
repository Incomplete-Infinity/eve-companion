document.addEventListener("DOMContentLoaded", () => {
  const spinnerTemplate = document.getElementById("spinner-template").content.cloneNode(true);
  document.body.insertAdjacentElement("afterbegin", spinnerTemplate.firstElementChild);
});
