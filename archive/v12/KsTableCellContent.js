import { applyAttributes } from "./story/1-applyAttributes.js";
import { renderControl } from "./story/2-renderControl.js";
import { PREDEFINED_CLASSES, PREDEFINED_BUTTON_CLASSES, PREDEFINED_TEXT_CLASSES } from "./cellRenderers/renderInputControl/v7/2-applyDefaultStyles.js";

class KsTableCellContent extends HTMLElement {
    static get PREDEFINED_CLASSES() { return PREDEFINED_CLASSES; }
    static get PREDEFINED_BUTTON_CLASSES() { return PREDEFINED_BUTTON_CLASSES; }
    static get PREDEFINED_TEXT_CLASSES() { return PREDEFINED_TEXT_CLASSES; }

    constructor() {
        super();
        this._inputs = {};
    }

    connectedCallback() {
        this.render();
    }

    set inputs(data) {
        this._inputs = data;
        this.render();
    }

    get inputs() {
        return this._inputs;
    }

    render() {
        // console.log("aaaa : ", this.getAttribute("k1"), this);
        const k1 = this.getAttribute("k1");

        console.log(k1); // "ss"

        let val = this._inputs.cellValue;
        const options = this._inputs.options || {};

        // Story 1: Clear and apply attributes
        applyAttributes(this, options);

        // Story 2: Render appropriate control based on data type and options
        renderControl(this, val, options);
    };

    get value() {
        const input = this.querySelector('input, select, textarea');
        if (input) {
            return input.type === 'checkbox' ? input.checked : input.value;
        }
        return undefined;
    }

    set value(newVal) {
        const input = this.querySelector('input, select, textarea');
        if (input) {
            if (input.type === 'checkbox') {
                input.checked = newVal;
            } else {
                input.value = newVal;
            }
        }
    }
};

if (!customElements.get("ks-table-cell-content-common")) {
    customElements.define("ks-table-cell-content-common", KsTableCellContent);
};

window.ks = window.ks || {};
window.ks.webComponents = window.ks.webComponents || {};

// Merge any properties previously attached onto KsTableCellContent
Object.assign(KsTableCellContent, window.ks.webComponents.KsTableCellContent || {});

window.ks.webComponents.KsTableCellContent = KsTableCellContent;
window.ks.webComponents.KsTableCellContent.version = "v11";

export { KsTableCellContent, PREDEFINED_CLASSES, PREDEFINED_BUTTON_CLASSES, PREDEFINED_TEXT_CLASSES };
export default KsTableCellContent;
