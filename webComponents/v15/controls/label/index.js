import properties from "./properties.json" with { type: "json" };

export function renderLabel(element, config) {
    const controlElement = document.createElement("label");

    // Only apply properties defined in properties.json
    properties.forEach(prop => {
        if (config[prop] !== undefined) {
            if (prop === "text") {
                controlElement.textContent = config[prop];
            } else {
                controlElement[prop] = config[prop];
            }
        }
    });

    element.appendChild(controlElement);
}

export { properties };
