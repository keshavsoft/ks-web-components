import properties from "./properties.json" with { type: "json" };

export function renderButton(element, config) {
    const controlElement = document.createElement("button");

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

    if (!config.type) {
        controlElement.type = "button";
    }

    element.appendChild(controlElement);
}

export { properties };
