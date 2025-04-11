const fs = require("fs");
const path = require("path");

const COMPONENTS_DIR = "./src/components/";
const DIST_DIR = "./dist/";
const TEMPLATE_FILE = path.join(DIST_DIR, "templates.html");
const SCRIPT_FILE = path.join(DIST_DIR, "components.js");
const TEMPLATE_PAGE = path.join(DIST_DIR, "template-page.html");

// Ensure `dist/` directory exists
if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR);

let templates = "";
let scriptList = [];

// Collect templates and scripts
fs.readdirSync(COMPONENTS_DIR).forEach(component => {
    const componentPath = path.join(COMPONENTS_DIR, component, "index.html");
    const scriptPath = path.join(COMPONENTS_DIR, component, "script.js");

    if (fs.existsSync(componentPath)) {
        const html = fs.readFileSync(componentPath, "utf8");
        const templateMatch = html.match(/<template[\s\S]*?<\/template>/);
        if (templateMatch) {
            templates += `\n${templateMatch[0]}`;
        }
    }

    if (fs.existsSync(scriptPath)) {
        scriptList.push(component);
        fs.copyFileSync(scriptPath, path.join(DIST_DIR, `${component}.js`));
    }
});

// Save templates in a standalone file
fs.writeFileSync(TEMPLATE_FILE, templates.trim());
console.log(`✅ Saved templates to ${TEMPLATE_FILE}`);

// Generate `components.js` as a proper JavaScript file
const componentLoaderScript = `
const componentScripts = ${JSON.stringify(scriptList)};

function loadComponentScripts() {
    return Promise.all(
        componentScripts.map(component => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = \`./\${component}.js\`;
                script.onload = () => {
                    console.log(\`✅ Loaded: \${component}.js\`);
                    resolve();
                };
                script.onerror = () => reject(new Error(\`❌ Failed to load: \${component}.js\`));
                document.body.appendChild(script);
            });
        })
    );
}

// Automatically load all components on page load
document.addEventListener("DOMContentLoaded", () => {
    loadComponentScripts().then(() => {
        console.log("🚀 All components loaded successfully!");
    }).catch(error => {
        console.error(error);
    });
});
`;

fs.writeFileSync(SCRIPT_FILE, componentLoaderScript.trim());
console.log(`✅ Created proper JavaScript loader: ${SCRIPT_FILE}`);

// Create a full template page
const templatePageContent = `
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkbox Template</title>
    <!-- CSS Reset -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Halfmoon CSS -->
    <link href="https://cdn.jsdelivr.net/npm/halfmoon@2.0.1/css/halfmoon.min.css" rel="stylesheet"
        integrity="sha256-SsJizWSIG9JT9Qxbiy8xnYJfjCAkhEQ0hihxRn7jt2M=" crossorigin="anonymous">
    <!-- Halfmoon modern core theme -->
    <link href="https://cdn.jsdelivr.net/npm/halfmoon@2.0.1/css/cores/halfmoon.modern.css" rel="stylesheet"
        integrity="sha256-DD6elX+jPmbFYPsGvzodUv2+9FHkxHlVtQi0/RJVULs=" crossorigin="anonymous">
    <link id="topcoat-stylesheet" rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-mobile-dark.min.css" />
</head>
<body>

    <h1>UI Component Library</h1>
    <p>All compiled templates are available below.</p>

    <div id="template-container" style="display:none;">
        ${templates.trim()}
    </div>

    <!-- Automatically inject templates into the document -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const container = document.getElementById("template-container");
            document.body.appendChild(container);
        });
    </script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha256-whL0tQWoY1Ku1iskqPFvmZ+CHsvmRWx/PIoEvIeWh4I=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha256-3gQJhtmj7YnV1fmtbVcnAV6eI4ws0Tr48bVZCThtCGQ=" crossorigin="anonymous"></script>


    <!-- Load component scripts -->
    <script src="./components.js"></script>

</body>
</html>
`;

// Save the generated template page
fs.writeFileSync(TEMPLATE_PAGE, templatePageContent.trim());
console.log(`✅ Created template-page.html with all templates and references.`);

console.log("🚀 Build complete! Open dist/template-page.html in a browser.");
