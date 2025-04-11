const componentScripts = ["button-bar","checkbox","modal","notification","offcanvas","radio","sidebar","spinner","switch","tab-bar","toast"];

function loadComponentScripts() {
    return Promise.all(
        componentScripts.map(component => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = `./${component}.js`;
                script.onload = () => {
                    console.log(`✅ Loaded: ${component}.js`);
                    resolve();
                };
                script.onerror = () => reject(new Error(`❌ Failed to load: ${component}.js`));
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