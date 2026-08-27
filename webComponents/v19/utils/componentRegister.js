export function registerComponent(ComponentClass, tagName, version, namespaceKey) {
    if (!customElements.get(tagName)) {
        customElements.define(tagName, ComponentClass);
    }

    window.ks = window.ks || {};
    window.ks.webComponents = window.ks.webComponents || {};
    window.ks.webComponents[namespaceKey] = window.ks.webComponents[namespaceKey] || {};

    // Now register the component under the namespace
    window.ks.webComponents[namespaceKey][ComponentClass.name] = ComponentClass;
    window.ks.webComponents[namespaceKey][ComponentClass.name].version = version;
}
