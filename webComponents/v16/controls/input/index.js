import properties from "./properties.json" with { type: "json" };
import styles from "./styles.json" with { type: "json" };
import { applyProperties } from "./applyProperties.js";
import { applyStyles } from "./applyStyles.js";

export function renderInput(element, config) {
    const controlElement = document.createElement("input");

    applyProperties(controlElement, config);

    if (!config.type) {
        controlElement.type = "text";
    }

    applyStyles(controlElement, config);

    element.appendChild(controlElement);
}

export { properties, styles };
