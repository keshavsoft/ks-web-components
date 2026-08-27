import { applyAttributes } from "./story/1-applyAttributes.js";
import { renderControl } from "./story/2-renderControl.js";

const showLogs = false;

class KsTableCellContent extends HTMLElement {
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

export { KsTableCellContent };
