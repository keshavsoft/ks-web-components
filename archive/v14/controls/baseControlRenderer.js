export function renderBaseControl(element, config) {
    const controlType = config.controlType;
    if (!controlType) return;

    let controlElement = null;

    if (controlType === "label") {
        controlElement = document.createElement("label");
    } else if (controlType === "input") {
        controlElement = document.createElement("input");
        controlElement.type = config.type || "text";
    } else if (controlType === "button") {
        controlElement = document.createElement("button");
        controlElement.type = config.type || "button";
    }

    if (controlElement) {
        // Universal attributes
        if (config.id) controlElement.id = config.id;
        if (config.className) controlElement.className = config.className;
        if (config.name) controlElement.name = config.name;

        // Content-based attributes (Label, Button)
        if (config.text !== undefined && (controlType === "label" || controlType === "button")) {
            controlElement.textContent = config.text;
        }

        // Input-specific attributes
        if (controlType === "input") {
            if (config.value !== undefined) controlElement.value = config.value;
            if (config.placeholder) controlElement.placeholder = config.placeholder;
        }

        element.appendChild(controlElement);
    }
}
