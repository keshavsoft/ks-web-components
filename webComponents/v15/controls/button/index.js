import properties from "./properties.json" with { type: "json" };
import styles from "./styles.json" with { type: "json" };

export function renderButton(element, config) {
    const controlElement = document.createElement("button");

    // Apply properties defined in properties.json (skip theme and className for now)
    properties.forEach(prop => {
        if (config[prop] !== undefined && prop !== "theme" && prop !== "className") {
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

    // Apply Tailwind styles
    const theme = config.theme || "default";
    const defaultClass = styles[theme] || styles["default"];
    
    if (defaultClass) {
        controlElement.className = config.className ? `${defaultClass} ${config.className}` : defaultClass;
    } else if (config.className) {
        controlElement.className = config.className;
    }

    element.appendChild(controlElement);
}

export { properties, styles };
