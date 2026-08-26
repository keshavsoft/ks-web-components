import { renderArrayView } from "../cellRenderers/renderArrayView.js";
import { renderDefault } from "../cellRenderers/renderDefault.js";
import { renderInputControl } from "../cellRenderers/renderInputControl/index.js";
import { PREDEFINED_BUTTON_CLASSES } from "../cellRenderers/renderInputControl/v7/2-applyDefaultStyles.js";

export const renderControl = (element, val, options) => {
    if (options?.showInput) {
        renderInputControl(element, options);
        
        // Add a button next to the input if requested
        if (options?.showButton) {
            const btn = document.createElement("button");
            btn.textContent = options.buttonText || "Submit";
            
            // Determine button theme, defaulting to 'default'
            const styleKey = (options.theme && PREDEFINED_BUTTON_CLASSES[options.theme]) ? options.theme : "default";
            btn.className = PREDEFINED_BUTTON_CLASSES[styleKey];
            
            // Allow outside overriding
            if (options.buttonClassName) {
                btn.className = `${btn.className} ${options.buttonClassName}`;
            }

            element.appendChild(btn);
        }
        return;
    }

    // Check for Array Data
    if (Array.isArray(val)) {
        renderArrayView(element, val);
        return;
    }

    // Fallback to default text rendering
    renderDefault(element, val, options);
};
