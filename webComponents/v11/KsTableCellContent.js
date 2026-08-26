import { applyAttributes } from "./story/1-applyAttributes.js";
import { renderControl } from "./story/2-renderControl.js";
import { PREDEFINED_CLASSES, PREDEFINED_BUTTON_CLASSES, PREDEFINED_TEXT_CLASSES } from "./cellRenderers/renderInputControl/v7/2-applyDefaultStyles.js";

const showLogs = false;

class KsTableCellContent extends HTMLElement {
    static get PREDEFINED_CLASSES() { return PREDEFINED_CLASSES; }
    static get PREDEFINED_BUTTON_CLASSES() { return PREDEFINED_BUTTON_CLASSES; }
    static get PREDEFINED_TEXT_CLASSES() { return PREDEFINED_TEXT_CLASSES; }

    constructor() {
        super();
        this._inputs = {};
    }

    set inputs(data) {
        this._inputs = data;
        this.render();
    }

    render() {
        let val = this._inputs.cellValue;
        // let rowData = this._inputs.rowData; // Kept commented if unused, or remove
        const options = this._inputs.options || {};

        if (showLogs) {
            console.log("options", options);
        };

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
