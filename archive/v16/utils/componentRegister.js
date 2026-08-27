export function registerComponent(ComponentClass, tagName, version, namespaceKey) {
    if (!customElements.get(tagName)) {
        customElements.define(tagName, ComponentClass);
    }

    window.ks = window.ks || {};
    window.ks.webComponents = window.ks.webComponents || {};

    // Preserve anything already attached
    Object.assign(
        ComponentClass,
        window.ks.webComponents[namespaceKey] || {}
    );

    // Now register the component
    window.ks.webComponents[namespaceKey] = ComponentClass;
    window.ks.webComponents[namespaceKey].version = version;
}
