document.addEventListener("DOMContentLoaded", () => {
  const sidebarTemplate = document.getElementById("sidebar-template").content.cloneNode(true);
  document.body.insertAdjacentElement("afterbegin", sidebarTemplate.firstElementChild);

  const sidebar = document.getElementById("app-sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      const sidebarInstance = new bootstrap.Offcanvas(sidebar);
      sidebarInstance.toggle();
    });
  }
});
