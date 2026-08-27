import { renderArrayView } from "../cellRenderers/renderArrayView.js";
import { renderDefault } from "../cellRenderers/renderDefault.js";
import { renderInputControl } from "../cellRenderers/renderInputControl/index.js";

export const renderControl = (element, val, options) => {
    if (options?.showInput) {
        renderInputControl(element, options);
        return;
    }

    // Check for Array Data
    if (Array.isArray(val)) {
        renderArrayView(element, val);
        return;
    }

    // Fallback to default text rendering
    renderDefault(element, val);
};
