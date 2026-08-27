export function generateFooter(footConfig, themeObj) {
    if (!footConfig) return null;

    const footer = document.createElement("div");
    footer.className = footConfig.theme || themeObj.footer || "";

    if (Array.isArray(footConfig.buttons)) {
        footConfig.buttons.forEach((btnConfig) => {
            const btn = document.createElement("button");
            btn.textContent = btnConfig.text || "Submit";
            
            let btnClass = themeObj.button || "";
            if (btnConfig.theme) {
                // If the theme is "save", look for "button-save" in the themeObj, else look for exact key, else use the raw string
                btnClass = themeObj[`button-${btnConfig.theme}`] || themeObj[btnConfig.theme] || btnConfig.theme;
            }
            btn.className = btnClass;
            
            if (btnConfig.type !== "submit") {
                btn.type = "button";
            }
            
            footer.appendChild(btn);
        });
    }

    return footer;
}
