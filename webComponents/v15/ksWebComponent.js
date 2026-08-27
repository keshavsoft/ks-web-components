import { readAttributes } from "./utils/attributeReader.js";
import { registerComponent } from "./utils/componentRegister.js";
import { renderBaseControl, CONTROL_PROPERTIES } from "./controls/baseControlRenderer.js";

class ksWebComponent extends HTMLElement {
    constructor() {
        super();
        this._options = {};
    }

    connectedCallback() {
        this.render();
    }

    getConfig() {
        return {
            ...readAttributes(this),
            ...this._options
        };
    }

    render() {
        this.innerHTML = ""; // Clear existing content
        const config = this.getConfig();
        renderBaseControl(this, config);
    }
}

registerComponent(ksWebComponent, "ks-web-component", "v15", "base");

// Register properties globally for easy access
window.ks.webComponents.base.CONTROL_PROPERTIES = CONTROL_PROPERTIES;

export { ksWebComponent, CONTROL_PROPERTIES };
export default ksWebComponent;