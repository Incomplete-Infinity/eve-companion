function createCheckbox({ label, id, disabled = false }) {
  const template = document.getElementById("checkbox-template").content.cloneNode(true);
  const checkbox = template.querySelector("input");
  const labelElement = template.querySelector(".checkbox-label");

  // Assign attributes
  checkbox.id = id;
  checkbox.disabled = disabled;
  labelElement.textContent = label;

  // Append to container
  document.getElementById("checkbox-container").appendChild(template);
}

// Example Usage
createCheckbox({ label: "Default", id: "checkbox-default" });
createCheckbox({ label: "Disabled", id: "checkbox-disabled", disabled: true });