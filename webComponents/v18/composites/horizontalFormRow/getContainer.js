export function getContainer(themeAttribute) {
    const theme = themeAttribute || "default";
    const themes = {
        "default": "flex flex-row items-center gap-4 p-4 bg-white rounded shadow-sm border border-gray-200",
        "borderless": "flex flex-row items-center gap-4 py-2",
        "compact": "flex flex-row items-center gap-2 p-2 bg-gray-50 rounded border border-gray-300 text-sm"
    };
    const containerClass = themes[theme] || themes["default"];

    const container = document.createElement("div");
    container.className = containerClass;
    return container;
}
