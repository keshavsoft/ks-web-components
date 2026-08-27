class ksWebComponent extends HTMLElement {
    constructor() {
        super();

        this._options = {};
    };

    connectedCallback() {
        this.render();
    };

    readAttributes() {
        const attributes = {};

        for (const attribute of this.attributes) {
            const { name, value } = attribute;

            if (!name.startsWith("ks-")) continue;

            const key = name
                .slice(3)
                .split("-")
                .map((part, index) =>
                    index === 0
                        ? part
                        : part.charAt(0).toUpperCase() + part.slice(1)
                )
                .join("");

            attributes[key] = value;
        }

        return attributes;
    };

    getConfig() {
        const attributeOptions = this.readAttributes();

        return {
            ...attributeOptions,
            ...this._options
        };
    };

    render() {
        const config = this.getConfig();

        console.log("Final component config:", config);
    };
};

if (!customElements.get("ks-web-component")) {
    customElements.define("ks-web-component", ksWebComponent);
};

window.ks = window.ks || {};
window.ks.webComponents = window.ks.webComponents || {};

// Preserve anything already attached
Object.assign(
    ksWebComponent,
    window.ks.webComponents.universal || {}
);

// Now register the component
window.ks.webComponents.universal = ksWebComponent;

window.ks.webComponents.universal.version = "v13";

export { ksWebComponent };
export default ksWebComponent;