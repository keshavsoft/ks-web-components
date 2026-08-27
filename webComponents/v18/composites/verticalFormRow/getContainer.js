import themes from "./themes.json" with { type: "json" };

export function getContainer(themeAttribute) {
    const theme = themeAttribute || "default";
    const containerClass = themes[theme] || themes["default"];

    const container = document.createElement("div");
    container.className = containerClass;
    return container;
}
