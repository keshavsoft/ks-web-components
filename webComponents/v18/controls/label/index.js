import properties from "./properties.json" with { type: "json" };
import styles from "./styles.json" with { type: "json" };
import { applyProperties } from "./applyProperties.js";
import { applyStyles } from "./applyStyles.js";

export function renderLabel(config) {
    const controlElement = document.createElement("label");

    applyProperties(controlElement, config);
    applyStyles(controlElement, config);

    return controlElement;
}

export { properties, styles };
