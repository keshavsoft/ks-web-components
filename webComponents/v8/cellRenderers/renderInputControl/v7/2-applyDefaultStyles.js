const PREDEFINED_CLASSES = {
    default: "w-full box-border border border-gray-300 rounded-md px-3 py-1.5 text-sm outline-none transition-all duration-200 text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    minimal: "w-full box-border border-b-2 border-gray-300 rounded-none px-2 py-1.5 text-sm outline-none transition-all duration-200 text-gray-700 bg-transparent focus:border-blue-500",
    pill: "w-full box-border border border-gray-300 rounded-full px-4 py-1.5 text-sm outline-none transition-all duration-200 text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    danger: "w-full box-border border border-red-500 rounded-md px-3 py-1.5 text-sm outline-none transition-all duration-200 text-red-700 bg-red-50 shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
};

const showLogs = false; // Set to true to enable logging

const applyDefaultStyles = (inInput, inOptions) => {
    if (showLogs) console.log("applyDefaultStyles", inInput, inOptions);
    // Determine which theme to use, defaulting to 'default'
    const styleKey = (inOptions.theme && PREDEFINED_CLASSES[inOptions.theme]) ? inOptions.theme : "default";

    // Apply the predefined Tailwind CSS classes
    inInput.className = PREDEFINED_CLASSES[styleKey];

    // If a className is passed from outside, we optionally append it
    if (inOptions.className) {
        inInput.className = `${inInput.className} ${inOptions.className}`;
    };
};

export { applyDefaultStyles, PREDEFINED_CLASSES };
