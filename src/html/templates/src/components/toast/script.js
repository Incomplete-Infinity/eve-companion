const toastContainer = document.getElementById("toast-container");
const toastTemplate = document.getElementById("toast-template");

const toastConfig = [
  {
    id: "success-toast-btn",
    status: "success",
    title: "Success Toast!",
    body: "This is a success toast."
  },
  {
    id: "info-toast-btn",
    status: "info",
    title: "Info Toast!",
    body: "This is an info toast."
  },
  {
    id: "warning-toast-btn",
    status: "warning",
    title: "Warning Toast!",
    body: "This is a warning toast."
  },
  {
    id: "danger-toast-btn",
    status: "danger",
    title: "Danger Toast!",
    body: "This is a danger toast."
  }
];

// Format time difference
function formatTimeSince(startTime) {
  const diff = Math.floor((Date.now() - startTime) / 1000); // Difference in seconds
  if (diff < 60) return `${diff} seconds ago`;
  const minutes = Math.floor(diff / 60);
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;
  const days = Math.floor(hours / 24);
  return `${days} days ago`;
}

function createToast({ status, title, body, delay = 60000 }) {
  const spawnTime = Date.now(); // Record the toast spawn time
  const toastClone = toastTemplate.content.cloneNode(true);

  // Populate slots dynamically
  toastClone.querySelector('[name="title"]').textContent = title;
  toastClone.querySelector('[name="body"]').textContent = body;

  const timeSlot = toastClone.querySelector('[name="time"]');
  const toastElement = toastClone.querySelector(".toast");

  toastElement.classList.add(`text-bg-${status}`, "border", `border-${status}`);
  toastElement.setAttribute("data-bs-delay", delay);
  toastContainer.appendChild(toastClone);

  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement);
  toastBootstrap.show();

  // Update the "time" slot every second
  const timeUpdater = setInterval(() => {
    if (!document.body.contains(toastElement)) {
      clearInterval(timeUpdater); // Stop updating if toast is removed
      return;
    }
    timeSlot.textContent = formatTimeSince(spawnTime);
  }, 1000);

  // Clean up when toast is hidden
  toastElement.addEventListener("hidden.bs.toast", () => {
    toastElement.remove();
    clearInterval(timeUpdater);
  });
}

// Attach event listeners to buttons
toastConfig.forEach(({ id, ...config }) => {
  const button = document.getElementById(id);
  if (button) {
    button.addEventListener("click", () => createToast(config));
  }
});
