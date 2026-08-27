import { readAttributes } from "./utils/attributeReader.js";
import { registerComponent } from "./utils/componentRegister.js";
import { renderBaseControl } from "./controls/baseControlRenderer.js";

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

registerComponent(ksWebComponent, "ks-web-component", "v14", "base");

export { ksWebComponent };
export default ksWebComponent;