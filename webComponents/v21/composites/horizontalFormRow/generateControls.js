import themes from "./themes.json" with { type: "json" };

export function generateControls(element) {
    const controls = {};
    const themeName = element.getAttribute("ks-theme") || "default";
    const themeConfig = themes[themeName] || themes["default"];

    // Generate Label
    const labelText = element.getAttribute("ks-label-text");
    if (labelText) {
        const label = document.createElement("ks-web-component");
        label.setAttribute("ks-control-type", "label");
        label.setAttribute("ks-text", labelText);
        label.setAttribute("ks-class-name", "font-semibold text-gray-700 whitespace-nowrap");
        
        if (themeConfig.labelWrapper) {
            label.className = themeConfig.labelWrapper;
        }
        
        controls["label"] = label;
    }

    // Generate Input
    const inputType = element.getAttribute("ks-input-type");
    if (inputType || element.hasAttribute("ks-input-placeholder")) {
        const input = document.createElement("ks-web-component");
        input.setAttribute("ks-control-type", "input");
        input.setAttribute("ks-type", inputType || "text");
        input.setAttribute("ks-placeholder", element.getAttribute("ks-input-placeholder") || "");
        
        if (themeConfig.inputWrapper) {
            input.className = themeConfig.inputWrapper;
        }
        
        controls["input"] = input;
    }

    // Generate Checkbox
    if (element.hasAttribute("ks-show-checkbox") && element.getAttribute("ks-show-checkbox") !== "false") {
        const checkbox = document.createElement("ks-web-component");
        checkbox.setAttribute("ks-control-type", "checkbox");
        
        if (element.hasAttribute("ks-checkbox-id")) {
            checkbox.setAttribute("ks-id", element.getAttribute("ks-checkbox-id"));
        }
        
        if (element.hasAttribute("ks-checkbox-checked")) {
            checkbox.setAttribute("ks-checked", element.getAttribute("ks-checkbox-checked"));
        }
        
        if (themeConfig.checkboxWrapper) {
            checkbox.className = themeConfig.checkboxWrapper;
        }
        
        controls["checkbox"] = checkbox;
    }

    // Generate Button
    const buttonText = element.getAttribute("ks-button-text");
    if (buttonText) {
        const button = document.createElement("ks-web-component");
        button.setAttribute("ks-control-type", "button");
        button.setAttribute("ks-text", buttonText);
        button.setAttribute("ks-theme", element.getAttribute("ks-button-theme") || "default");
        
        if (themeConfig.buttonWrapper) {
            button.className = themeConfig.buttonWrapper;
        }
        
        controls["button"] = button;
    }

    return controls;
}
