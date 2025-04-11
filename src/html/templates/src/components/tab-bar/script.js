

class TabBar {
  constructor(id, tabs, parent) {
    const tabBarTemplate = document.getElementById("tab-bar-template").content.cloneNode(true);
    const tabBar = tabBarTemplate.querySelector(".topcoat-tab-bar");

    tabBar.id = id; // Assign a unique ID to the tab bar
  
    tabs.forEach((tab, index) => {
      const tabTemplate = document.getElementById("tab-bar-tab-template").content.cloneNode(true);
      const tabInput = tabTemplate.querySelector(".topcoat-tab-bar__input");
      const tabButton = tabTemplate.querySelector(".topcoat-tab-bar__button");
  
      // Generate unique ID for input
      const inputId = `${id}-tab-${index}`;
  
      // Assign attributes
      tabInput.name = `tab-bar-${id}`; // Ensure tabs in the same bar belong together
      tabInput.id = inputId;
      tabButton.textContent = tab.label;
      tabButton.setAttribute("for", inputId); // Ensure label points to input
  
      if (tab.checked) tabInput.checked = true;
      if (tab.disabled) tabInput.disabled = true;
  
      tabBar.appendChild(tabTemplate);
    });
  
    // Append tab bar to container
    parent.appendChild(tabBar);
    
    return tabBar;
  }
}

// Example Usage
new TabBar("main-tabs", [
  { label: "One", checked: true },
  { label: "Two" },
  { label: "Three", disabled: true }
], document.getElementById("tab-bar-1-container"));

new TabBar("settings-tabs", [
  { label: "General" },
  { label: "Advanced", checked: true },
  { label: "About" }
], document.getElementById("tab-bar-2-container"));

new TabBar("menu-tabs", [
  { label: "File" },
  { label: "Edit" },
  { label: "Selection" },
  { label: "View" },
  { label: "Go" },
  { label: "Run" },
  { label: "Terminal" },
  { label: "Help" },
], document.getElementById("tab-bar-3-container"));