import { renderArrayView } from "./cellRenderers/renderArrayView.js";
import { renderDefault } from "./cellRenderers/renderDefault.js";
import { renderInputControl } from "./cellRenderers/renderInputControl/index.js";

const showLogs = false;

class KsTableCellContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._inputs = {};
    }

    set inputs(data) {
        this._inputs = data;
        this.render();
    }

    render() {
        let val = this._inputs.cellValue;
        let rowData = this._inputs.rowData;
        const options = this._inputs.options || {};

        if (showLogs) {
            console.log("options", options);
        };

        // Clear previous content
        this.shadowRoot.innerHTML = '';

        if (options.dataKey || options.name) {
            const nameToSet = options.name || options.dataKey;
            this.setAttribute("name", nameToSet);
            this.name = nameToSet;
        }

        if (options.id) {
            this.setAttribute("id", options.id);
            this.id = options.id;
        }

        if (options?.showInput) {
            renderInputControl(this.shadowRoot, options);
            return;
        };

        // 2. Check for Array Data
        if (Array.isArray(val)) {
            renderArrayView(this.shadowRoot, val);
            return;
        }

        // 3. Fallback to default text rendering
        renderDefault(this.shadowRoot, val);
    };

    get value() {
        const input = this.shadowRoot.querySelector('input, select, textarea');
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
