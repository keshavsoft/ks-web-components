import { registerComponent } from "../../utils/componentRegister.js";
import { getContainer } from "./getContainer.js";
import { generateControls } from "./generateControls.js";
import { composeOrder } from "./composeOrder.js";

class ksHorizontalFormRow extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = ""; // Clear existing content

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
registerComponent(ksHorizontalFormRow, "ks-horizontal-form-row", "v18", "composite");

export { ksHorizontalFormRow };
export default ksHorizontalFormRow;
