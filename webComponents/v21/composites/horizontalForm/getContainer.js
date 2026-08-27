import themes from "./themes.json" with { type: "json" };

export function getContainer(themeAttribute) {
    const themeName = themeAttribute || "default";
    const containerClass = themes[themeName] || themes["default"];

    const container = document.createElement("form");
    container.className = containerClass;
    // Prevent default form submission to let components handle data
    container.addEventListener("submit", (e) => e.preventDefault());
    return container;
}
