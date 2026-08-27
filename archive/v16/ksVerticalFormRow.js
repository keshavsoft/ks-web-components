import { registerComponent } from "./utils/componentRegister.js";
import { renderBaseControl } from "./controls/baseControlRenderer.js";

class ksVerticalFormRow extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = ""; // Clear existing content

        // 1. Create a layout container
        const container = document.createElement("div");
        container.className = "flex flex-col gap-2 p-4 bg-white rounded shadow-sm border border-gray-200";

        // 2. Generate Label
        const labelText = this.getAttribute("ks-label-text") || "Default Label";
        const labelControl = renderBaseControl({
            controlType: "label",
            text: labelText,
            className: "font-semibold text-gray-700"
        });

        // 3. Generate Input
        const inputType = this.getAttribute("ks-input-type") || "text";
        const inputPlaceholder = this.getAttribute("ks-input-placeholder") || "Enter value...";
        const inputControl = renderBaseControl({
            controlType: "input",
            type: inputType,
            placeholder: inputPlaceholder
        });

        // 4. Generate Button
        const buttonText = this.getAttribute("ks-button-text") || "Submit";
        const buttonTheme = this.getAttribute("ks-button-theme") || "default";
        const buttonControl = renderBaseControl({
            controlType: "button",
            text: buttonText,
            theme: buttonTheme
        });

        // 5. Compose the form row
        if (labelControl) container.appendChild(labelControl);
        if (inputControl) container.appendChild(inputControl);
        
        // Let's add a small wrapper for the button so it aligns well
        const buttonWrapper = document.createElement("div");
        buttonWrapper.className = "mt-2 flex justify-end";
        if (buttonControl) buttonWrapper.appendChild(buttonControl);
        
        container.appendChild(buttonWrapper);

        // 6. Attach to DOM
        this.appendChild(container);
    }
}

// Register as a composite component
registerComponent(ksVerticalFormRow, "ks-vertical-form-row", "v16", "composite");

export { ksVerticalFormRow };
export default ksVerticalFormRow;
