export function readAttributes(element) {
    const attributes = {};

    for (const attribute of element.attributes) {
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
}
