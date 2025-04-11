class Offcanvas {
  constructor({
    title = "Offcanvas Title",
    content = "This is the default offcanvas content.",
    placement = "start", // Options: "start" (left), "end" (right), "top", "bottom"
    scroll = false, // Enable body scrolling inside offcanvas
    backdrop = true, // Show backdrop when offcanvas is open
    staticBackdrop = false // Prevent closing by clicking outside
  }) {
    // Clone template
    this.template = document.getElementById("offcanvas-template").content.cloneNode(true);
    this.offcanvasElement = this.template.querySelector(".offcanvas");

    // Assign unique ID
    this.offcanvasId = `offcanvas-${Date.now()}`;
    this.offcanvasElement.id = this.offcanvasId;
    this.offcanvasElement.setAttribute("aria-labelledby", `${this.offcanvasId}-title`);

    // Update placement (left, right, top, bottom)
    this.offcanvasElement.classList.add(`offcanvas-${placement}`);

    // Enable body scrolling if required
    if (scroll) {
      this.offcanvasElement.setAttribute("data-bs-scroll", "true");
    }

    // Enable or disable backdrop
    if (!backdrop) {
      this.offcanvasElement.setAttribute("data-bs-backdrop", "false");
    } else if (staticBackdrop) {
      this.offcanvasElement.setAttribute("data-bs-backdrop", "static");
    }

    // Update title and content
    this.offcanvasElement.querySelector(".offcanvas-title").textContent = title;
    this.offcanvasElement.querySelector(".offcanvas-body").innerHTML = content;

    // Append to body and show it
    document.body.appendChild(this.offcanvasElement);
    this.offcanvas = new bootstrap.Offcanvas(this.offcanvasElement);
    this.offcanvas.show();

    // Cleanup after offcanvas is closed
    this.offcanvasElement.addEventListener("hidden.bs.offcanvas", () => {
      this.offcanvasElement.remove();
    });
  }
}

// Example Usage
document.getElementById("open-offcanvas-btn").addEventListener("click", () => {
  new Offcanvas({
    title: "Dynamic Offcanvas",
    content: "<p>This offcanvas was created dynamically.</p>",
    placement: "end", // Right side
    scroll: true,
    backdrop: true,
    staticBackdrop: false
  });
});
