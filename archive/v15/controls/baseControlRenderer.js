import { renderLabel, properties as labelProperties } from "./label/index.js";
import { renderInput, properties as inputProperties } from "./input/index.js";
import { renderButton, properties as buttonProperties } from "./button/index.js";

// Expose the JSON properties for external consumers
export const CONTROL_PROPERTIES = {
    label: labelProperties,
    input: inputProperties,
    button: buttonProperties
};

export function renderBaseControl(element, config) {
    const controlType = config.controlType;
    if (!controlType) return;

    if (controlType === "label") {
        renderLabel(element, config);
    } else if (controlType === "input") {
        renderInput(element, config);
    } else if (controlType === "button") {
        renderButton(element, config);
    }
}
