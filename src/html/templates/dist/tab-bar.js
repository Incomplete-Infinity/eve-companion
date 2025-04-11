function createTabBar(id, tabs) {
  const tabBarTemplate = document.getElementById("tab-bar-template").content.cloneNode(true);
  const tabBar = tabBarTemplate.querySelector(".topcoat-tab-bar");

  tabBar.id = id; // Assign a unique ID to the tab bar

  tabs.forEach((tab, index) => {
    const tabTemplate = document.getElementById("tab-template").content.cloneNode(true);
    const tabInput = tabTemplate.querySelector(".topcoat-tab-bar__input");
    const tabButton = tabTemplate.querySelector(".topcoat-tab-bar__button");

    // Assign attributes
    tabInput.name = `tab-bar-${id}`; // Ensure tabs in the same bar belong together
    tabInput.id = `${id}-tab-${index}`;
    tabButton.textContent = tab.label;
    
    if (tab.checked) tabInput.checked = true;
    if (tab.disabled) tabInput.disabled = true;

    tabBar.appendChild(tabTemplate);
  });

  // Append tab bar to container
  document.getElementById("tab-bar-container").appendChild(tabBar);
}

// Example Usage
createTabBar("main-tabs", [
  { label: "One", checked: true },
  { label: "Two" },
  { label: "Three", disabled: true }
]);

createTabBar("settings-tabs", [
  { label: "General" },
  { label: "Advanced", checked: true },
  { label: "About" }
]);