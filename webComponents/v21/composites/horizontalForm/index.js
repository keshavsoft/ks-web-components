import { getContainer } from "./getContainer.js";
import { generateControls } from "./generateControls.js";
import { composeOrder } from "./composeOrder.js";
import { registerComponent } from "../../utils/componentRegister.js";

export class ksHorizontalForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Retrieve the theme from the ks-theme attribute
        const theme = this.getAttribute("ks-theme");

        // 1. Get Container (the <form> element)
        const container = getContainer(theme);

        // 2. Generate Controls (the ks-horizontal-form-row elements based on _options array)
        const controls = generateControls(this);

        // 3. Compose Order (append all rows to the form)
        composeOrder(container, controls);

        // Append the final container to this web component
        this.appendChild(container);
    }
}

registerComponent({
    inComponentClass: ksHorizontalForm,
    inTagName: "ks-horizontal-form",
    inVersion: "v21",
    inNamespaceKey: "ksHorizontalForm"
});
