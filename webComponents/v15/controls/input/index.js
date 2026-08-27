import properties from "./properties.json" with { type: "json" };

export function renderInput(element, config) {
    const controlElement = document.createElement("input");

    // Only apply properties defined in properties.json
    properties.forEach(prop => {
        if (config[prop] !== undefined) {
            controlElement[prop] = config[prop];
        }
    });

    if (!config.type) {
        controlElement.type = "text";
    }

    element.appendChild(controlElement);
}

export { properties };
