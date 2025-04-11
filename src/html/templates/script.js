async function loadTemplate(templatePath, targetSelector) {
    const response = await fetch(templatePath);
    const html = await response.text();
    document.querySelector(targetSelector).innerHTML += html;
}

// Load UI structure
async function loadUI() {
    await loadTemplate("./src/templates/main-interface.html", "#app-container");
    await loadTemplate("./src/templates/title-bar.html", "#title-bar-container");
    await loadTemplate("./src/templates/sidebar.html", "#sidebar-container");
}

// Function to load components dynamically in the iframe
function loadComponent(componentName) {
    document.getElementById("component-frame").src = `./src/components/${componentName}/index.html`;
}

// Auto-detect available components
async function fetchComponents() {
    try {
        const response = await fetch("./src/components/");
        const text = await response.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        return [...doc.querySelectorAll("a")]
            .map(a => a.textContent.trim())
            .filter(name => name !== "Parent Directory"); // Remove directories
    } catch (error) {
        console.error("Failed to fetch components:", error);
        return [];
    }
}

// Inject components into sidebar
document.addEventListener("DOMContentLoaded", async () => {
    await loadUI();
    const sidebar = document.getElementById("sidebar-menu");

    const components = await fetchComponents();
    components.forEach(component => {
        const menuItem = document.createElement("a");
        menuItem.href = "#";
        menuItem.className = "sidebar-link";
        menuItem.textContent = component;
        menuItem.onclick = () => loadComponent(component);
        sidebar.appendChild(menuItem);
    });
});
