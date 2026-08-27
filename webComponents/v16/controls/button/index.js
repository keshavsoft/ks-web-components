import properties from "./properties.json" with { type: "json" };
import styles from "./styles.json" with { type: "json" };
import { applyProperties } from "./applyProperties.js";
import { applyStyles } from "./applyStyles.js";

export function renderButton(element, config) {
    const controlElement = document.createElement("button");

    applyProperties(controlElement, config);

    if (!config.type) {
        controlElement.type = "button";
    }

    applyStyles(controlElement, config);

    element.appendChild(controlElement);
}

export { properties, styles };
