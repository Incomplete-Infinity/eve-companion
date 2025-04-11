function createButtonBar(buttonLabels = ["One", "Two", "Three"]) {
  const barTemplate = document.getElementById("button-bar-template").content.cloneNode(true);
  const buttonTemplate = document.getElementById("button-template").content;
  const buttonBar = barTemplate.querySelector(".topcoat-button-bar");

  // Create buttons dynamically using the button template
  buttonLabels.forEach((label, index) => {
    const buttonItem = buttonTemplate.cloneNode(true);
    const button = buttonItem.querySelector("button");

    // Assign text and unique ID
    button.textContent = label;
    button.id = `button-bar-btn-${index + 1}`;

    buttonBar.appendChild(buttonItem);
  });

  // Append to container
  document.getElementById("button-bar-container").appendChild(buttonBar);
}

// Example Usage
createButtonBar(["One", "Two", "Three"]);

// Example: Adding event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".topcoat-button-bar__button").forEach(button => {
    button.addEventListener("click", () => {
      console.log(`Clicked: ${button.id} - ${button.textContent}`);
    });
  });
});