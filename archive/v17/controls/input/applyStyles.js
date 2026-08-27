import styles from "./styles.json" with { type: "json" };

export function applyStyles(controlElement, config) {
    const theme = config.theme || "default";
    const defaultClass = styles[theme] || styles["default"];
    
    if (defaultClass) {
        controlElement.className = config.className ? `${defaultClass} ${config.className}` : defaultClass;
    } else if (config.className) {
        controlElement.className = config.className;
    }
}
