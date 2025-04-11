function createNotification(id, count = 0, parentElement = null) {
  const notificationTemplate = document.getElementById("notification-template").content.cloneNode(true);
  const notification = notificationTemplate.querySelector(".topcoat-notification");

  notification.id = id; // Assign a unique ID
  notification.textContent = count;

  if (parentElement) {
    parentElement.appendChild(notification);
  } else {
    document.getElementById("notification-container").appendChild(notification);
  }

  return notification;
}

function updateNotification(id, newCount) {
  const notification = document.getElementById(id);
  if (notification) {
    notification.textContent = newCount;
    notification.style.display = newCount > 0 ? "inline-block" : "none"; // Hide if zero
  }
}

// Example Usage
createNotification("message-notification", 3);
createNotification("alert-notification", 0);

// Simulating an update after 3 seconds
setTimeout(() => {
  updateNotification("message-notification", 5);
  updateNotification("alert-notification", 2);
}, 3000);