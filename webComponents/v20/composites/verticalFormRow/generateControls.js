import { renderBaseControl } from "../../controls/baseControlRenderer.js";

export function generateControls(element) {
    const controls = {};

    // Generate Label
    const labelText = element.getAttribute("ks-label-text");
    if (labelText) {
        controls["label"] = renderBaseControl({
            controlType: "label",
            text: labelText,
            className: "font-semibold text-gray-700"
        });
    }

    // Generate Input
    const inputType = element.getAttribute("ks-input-type");
    if (inputType || element.hasAttribute("ks-input-placeholder")) {
        controls["input"] = renderBaseControl({
            controlType: "input",
            type: inputType || "text",
            placeholder: element.getAttribute("ks-input-placeholder") || ""
        });
    }

    // Generate Checkbox
    if (element.hasAttribute("ks-show-checkbox") && element.getAttribute("ks-show-checkbox") !== "false") {
        controls["checkbox"] = renderBaseControl({
            controlType: "checkbox",
            id: element.getAttribute("ks-checkbox-id") || "",
            checked: element.hasAttribute("ks-checkbox-checked") ? element.getAttribute("ks-checkbox-checked") !== "false" : false
        });
    }

    // Generate Button
    const buttonText = element.getAttribute("ks-button-text");
    if (buttonText) {
        const buttonControl = renderBaseControl({
            controlType: "button",
            text: buttonText,
            theme: element.getAttribute("ks-button-theme") || "default"
        });
        
        // Wrap button for alignment
        const buttonWrapper = document.createElement("div");
        buttonWrapper.className = "mt-2 flex justify-end";
        buttonWrapper.appendChild(buttonControl);
        controls["button"] = buttonWrapper;
    }

    return controls;
}
