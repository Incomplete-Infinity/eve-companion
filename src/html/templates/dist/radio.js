class Radio {
  constructor({ label, id, group, position = "right", disabled = false }) {
    this.template = document.getElementById("radio-template").content.cloneNode(true);
    this.radio = this.template.querySelector("input");
    this.div = this.template.querySelector("div");
    this.labelElement = this.template.querySelector(".radio-label");

    // Assign attributes
    this.id = id;
    this.name = group;
    this.disabled = disabled;
    this.radio.disabled = disabled;
    this.labelElement.textContent = label;
this.container = document.getElementById("radio-container");
    // Adjust label position
    if (position === "left") {
      this.div.before(this.radio);
    } else if (position === "none") {
      this.labelElement.remove();
    }

    // Append to container
    this.container.appendChild(this.template);
    this.container.appendChild(document.createElement("br"));
  }
}

// Example Usage
new Radio({ label: "", id: "radio-nolabel", group: "topcoat", position: "none" });
new Radio({ label: "Left label", id: "radio-left", group: "topcoat", position: "left" });
new Radio({ label: "Right label", id: "radio-right", group: "topcoat", position: "right" });
new Radio({ label: "Disabled", id: "radio-disabled", group: "topcoat", disabled: true });