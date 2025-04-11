const showToast = ({
  title = "Notification",
  message = "This is a toast message.",
  type = "primary", // Options: primary, success, danger, warning, info
  icon = "⚡", // Use Unicode emojis or Bootstrap icons
  duration = 5000, // Auto-hide duration in milliseconds
  position = "bottom-end", // Options: top-start, top-center, top-end, bottom-start, bottom-center, bottom-end
  autohide = true
}) => {
  // Clone the template
  const template = document.getElementById("toast-template").content.cloneNode(true);
  const toastElement = template.querySelector(".toast");

  // Assign unique ID
  const toastId = `toast-${Date.now()}`;
  toastElement.id = toastId;

  // Customize title, message, and icon
  template.querySelector(".toast-title").textContent = title;
  template.querySelector(".toast-body").innerHTML = message;
  template.querySelector(".toast-icon").textContent = icon;
  
  // Update toast appearance based on type (color themes)
  toastElement.classList.add(`text-bg-${type}`, "border-0", "shadow");

  // Set toast position
  const container = document.getElementById("toast-container");
  container.classList.remove("bottom-0", "top-0", "start-0", "end-0", "translate-middle-x", "translate-middle-y");
  switch (position) {
    case "top-start":
      container.classList.add("top-0", "start-0");
      break;
    case "top-center":
      container.classList.add("top-0", "start-50", "translate-middle-x");
      break;
    case "top-end":
      container.classList.add("top-0", "end-0");
      break;
    case "bottom-start":
      container.classList.add("bottom-0", "start-0");
      break;
    case "bottom-center":
      container.classList.add("bottom-0", "start-50", "translate-middle-x");
      break;
    case "bottom-end":
    default:
      container.classList.add("bottom-0", "end-0");
      break;
  }

  // Append toast to container
  container.appendChild(toastElement);
  
  // Show the toast using Bootstrap
  const toast = new bootstrap.Toast(toastElement, { autohide });
  toast.show();

  // Auto-remove after duration (if applicable)
  if (autohide) {
    setTimeout(() => {
      toastElement.remove();
    }, duration);
  }

  // Cleanup when toast is dismissed manually
  toastElement.addEventListener("hidden.bs.toast", () => {
    toastElement.remove();
  });
};

// Example Usage
document.getElementById("show-toast-btn").addEventListener("click", () => {
  showToast({
    title: "Success!",
    message: "Your action was completed successfully.",
    type: "success",
    icon: "✅",
    duration: 4000,
    position: "top-end",
    autohide: true
  });
});
