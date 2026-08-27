import { renderLabel, properties as labelProperties } from "./label/index.js";
import { renderInput, properties as inputProperties } from "./input/index.js";
import { renderButton, properties as buttonProperties } from "./button/index.js";
import { renderCheckbox, properties as checkboxProperties } from "./checkbox/index.js";

// Expose the JSON properties for external consumers
export const CONTROL_PROPERTIES = {
    label: labelProperties,
    input: inputProperties,
    button: buttonProperties,
    checkbox: checkboxProperties
};

export function renderBaseControl(config) {
    const controlType = config.controlType;
    if (!controlType) return null;

    if (controlType === "label") {
        return renderLabel(config);
    } else if (controlType === "input") {
        return renderInput(config);
    } else if (controlType === "button") {
        return renderButton(config);
    } else if (controlType === "checkbox") {
        return renderCheckbox(config);
    }
    
    return null;
}
