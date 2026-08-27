import { generateControls } from "./generateControls.js";
import { generateHeader } from "./generateHeader.js";
import { generateFooter } from "./generateFooter.js";
import { composeOrder } from "./composeOrder.js";
import { registerComponent } from "../../utils/componentRegister.js";
import themes from "./themes.json" with { type: "json" };
import options from "./options.json" with { type: "json" };
import defaultOptions from "./defaultOptions.json" with { type: "json" };

export class ksHorizontalForm extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        const themeObj = themes[this.getAttribute("ks-theme")] || themes["default"];

        const userConfig = this.config || {};
        const isConfigProvided = this.config !== undefined;

        // If the user explicitly provided a config object, we strictly use it. 
        // Omitted sections will evaluate to undefined and won't be rendered.
        // If no config object is provided, we fall back to legacy props or defaultOptions.
        const config = isConfigProvided ? {
            head: userConfig.head,
            body: userConfig.body,
            foot: userConfig.foot,
            order: userConfig.order || defaultOptions.order
        } : {
            head: this._head !== undefined ? this._head : defaultOptions.head,
            body: this._body !== undefined ? this._body : defaultOptions.body,
            foot: this._foot !== undefined ? this._foot : defaultOptions.foot,
            order: this._order !== undefined ? this._order : defaultOptions.order
        };

        const headElement = generateHeader(config.head, themeObj);
        const bodyElement = generateControls(config.body, themeObj);
        const footElement = generateFooter(config.foot, themeObj);

        const elements = {
            head: headElement,
            body: bodyElement,
            foot: footElement
        };

        composeOrder(this, elements, config.order, themeObj);
    };
};

registerComponent({
    inComponentClass: ksHorizontalForm,
    inTagName: "ks-horizontal-form",
    inVersion: "v22",
    inNamespaceKey: "composite"
});

ksHorizontalForm.themes = themes;
ksHorizontalForm.defaultOptions = defaultOptions;
ksHorizontalForm.options = options;

export { options, themes };
