import { registerComponent } from "../../utils/componentRegister.js";
import { getContainer } from "./getContainer.js";
import { generateControls } from "./generateControls.js";
import { composeOrder } from "./composeOrder.js";

class ksVerticalFormRow extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = ""; // Clear existing content

        // Support JS Options by syncing them to attributes
        if (this._options) {
            for (const [key, value] of Object.entries(this._options)) {
                const attrName = "ks-" + key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
                this.setAttribute(attrName, String(value));
            }
        }

        // 1. Get Theme Container
        const container = getContainer(this.getAttribute("ks-theme"));
        
        // 2. Generate required controls
        const controls = generateControls(this);
        
        // 3. Compose them in the requested order
        composeOrder(container, controls, this.getAttribute("ks-order"));

        // 4. Attach to DOM
        this.appendChild(container);
    }
}

// Register as a composite component
registerComponent(ksVerticalFormRow, "ks-vertical-form-row", "v17", "composite");

export { ksVerticalFormRow };
export default ksVerticalFormRow;
