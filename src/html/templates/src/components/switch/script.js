function createSwitch({ id, checked = false, disabled = false }) {
  const template = document.getElementById("switch-template").content.cloneNode(true);
  const switchInput = template.querySelector(".topcoat-switch__input");

  // Assign attributes
  switchInput.id = id;
  switchInput.checked = checked;
  switchInput.disabled = disabled;

  // Append to container
  document.getElementById("switch-container").appendChild(template);
}

// Example Usage
createSwitch({ id: "switch-default" }); // Default switch
createSwitch({ id: "switch-checked", checked: true }); // Checked switch
createSwitch({ id: "switch-disabled", disabled: true }); // Disabled switch