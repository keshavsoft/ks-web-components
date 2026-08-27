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
        const config = {
            head: userConfig.head || this._head || defaultOptions.head,
            body: userConfig.body || this._body || defaultOptions.body,
            foot: userConfig.foot || this._foot || defaultOptions.foot,
            order: userConfig.order || this._order || defaultOptions.order
        };
        console.log("ksHorizontalForm config : ", this, config);

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
    inVersion: "v21",
    inNamespaceKey: "composite"
});

ksHorizontalForm.themes = themes;
ksHorizontalForm.defaultOptions = defaultOptions;
ksHorizontalForm.options = options;

export { options, themes };
