import themes from "./themes.json" with { type: "json" };

export function getContainer(themeAttribute) {
    const themeName = themeAttribute || "default";
    const themeConfig = themes[themeName] || themes["default"];
    const containerClass = typeof themeConfig === 'string' ? themeConfig : themeConfig.container;

    const container = document.createElement("div");
    container.className = containerClass;
    return container;
}
