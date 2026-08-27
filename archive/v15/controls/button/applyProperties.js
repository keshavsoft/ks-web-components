import properties from "./properties.json" with { type: "json" };

export function applyProperties(controlElement, config) {
    properties.forEach(prop => {
        if (config[prop] !== undefined && prop !== "theme" && prop !== "className") {
            if (prop === "text") {
                controlElement.textContent = config[prop];
            } else if (prop === "disabled" || prop === "autofocus") {
                controlElement[prop] = config[prop] !== "false";
            } else {
                controlElement[prop] = config[prop];
            }
        }
    });
}
