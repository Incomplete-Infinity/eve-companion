const createModal = ({
    title = "Default Title",
    content = "This is the default modal body.",
    buttons = [
      { text: "Close", class: "btn-secondary", dismiss: true },
      { text: "Save", class: "btn-primary", dismiss: false, action: () => alert("Saved!") }
    ],
    size = "default", // Options: "sm", "lg", "xl", "fullscreen"
    centered = false,
    scrollable = false,
    staticBackdrop = false
  }) => {
    // Clone modal template
    const template = document.getElementById("modal-template").content.cloneNode(true);
    const modal = template.querySelector(".modal");
  
    // Assign modal ID dynamically
    const modalId = `modal-${Date.now()}`;
    modal.id = modalId;
    modal.setAttribute("aria-labelledby", `${modalId}-title`);
  
    // Adjust modal dialog class based on size
    const modalDialog = modal.querySelector(".modal-dialog");
    modalDialog.classList.toggle("modal-sm", size === "sm");
    modalDialog.classList.toggle("modal-lg", size === "lg");
    modalDialog.classList.toggle("modal-xl", size === "xl");
    modalDialog.classList.toggle("modal-fullscreen", size === "fullscreen");
  
    // Adjust for centered or scrollable behavior
    if (centered) modalDialog.classList.add("modal-dialog-centered");
    if (scrollable) modalDialog.classList.add("modal-dialog-scrollable");
  
    // Static backdrop (prevents closing when clicking outside)
    if (staticBackdrop) {
      modal.setAttribute("data-bs-backdrop", "static");
      modal.setAttribute("data-bs-keyboard", "false");
    }
  
    // Update title
    modal.querySelector(".modal-title").textContent = title;
  
    // Update body content
    modal.querySelector(".modal-body").innerHTML = content;
  
    // Update footer buttons
    const footer = modal.querySelector(".modal-footer");
    footer.innerHTML = ""; // Clear existing buttons
    buttons.forEach(({ text, class: btnClass, dismiss, action }) => {
      const button = document.createElement("button");
      button.textContent = text;
      button.className = `btn ${btnClass}`;
      if (dismiss) button.setAttribute("data-bs-dismiss", "modal");
      if (action) button.onclick = action;
      footer.appendChild(button);
    });
  
    // Append modal to body and show it
    document.body.appendChild(modal);
    new bootstrap.Modal(modal).show();
  
    // Cleanup modal after it's hidden
    modal.addEventListener("hidden.bs.modal", () => modal.remove());
  };
  
  // Example Usage
  document.getElementById("open-modal-btn").addEventListener("click", () => {
    createModal({
      title: "Dynamic Modal",
      content: "<p>This modal was generated dynamically.</p>",
      buttons: [
        { text: "Cancel", class: "btn-secondary", dismiss: true },
        { text: "Confirm", class: "btn-primary", dismiss: false, action: () => alert("Confirmed!") }
      ],
      size: "lg",
      centered: true,
      scrollable: true,
      staticBackdrop: true
    });
  });
  