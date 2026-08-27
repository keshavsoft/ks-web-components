export function generateHeader(headConfig, themeObj) {
    if (!headConfig) return null;

    const header = document.createElement("div");
    header.className = headConfig.theme || (themeObj && themeObj.header) || "";

    if (headConfig.showLabel) {
        const label = document.createElement("label");
        label.textContent = headConfig.showLabel;
        header.appendChild(label);
    };

    return header;
}
