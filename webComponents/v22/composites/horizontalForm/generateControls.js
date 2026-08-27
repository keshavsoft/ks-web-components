export function generateControls(bodyConfig, themeObj) {
    if (!bodyConfig) return null;

    const formContainer = document.createElement("form");
    formContainer.className = bodyConfig.theme || themeObj.body || "";
    
    formContainer.addEventListener("submit", (e) => e.preventDefault());

    if (Array.isArray(bodyConfig.columns)) {
        bodyConfig.columns.forEach((colConfig, index) => {
            const row = document.createElement("ks-horizontal-form-row");
            row._options = colConfig;
            
            if (colConfig.theme) {
                row.setAttribute("ks-theme", colConfig.theme);
            }
            
            formContainer.appendChild(row);
        });
    }

    return formContainer;
}
