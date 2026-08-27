import properties from "./properties.json" with { type: "json" };
import styles from "./styles.json" with { type: "json" };
import { applyProperties } from "./applyProperties.js";
import { applyStyles } from "./applyStyles.js";

export function renderCheckbox(config) {
    const controlElement = document.createElement("input");
    controlElement.type = "checkbox"; // Force checkbox type

    applyProperties(controlElement, config);
    applyStyles(controlElement, config);

    return controlElement;
}

export { properties, styles };
