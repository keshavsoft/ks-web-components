const PREDEFINED_CLASSES = {
    default: "w-full box-border border border-gray-300 rounded-md px-3 py-1.5 text-sm outline-none transition-all duration-200 text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    minimal: "w-full box-border border-b-2 border-gray-300 rounded-none px-2 py-1.5 text-sm outline-none transition-all duration-200 text-gray-700 bg-transparent focus:border-blue-500",
    pill: "w-full box-border border border-gray-300 rounded-full px-4 py-1.5 text-sm outline-none transition-all duration-200 text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    danger: "w-full box-border border border-red-500 rounded-md px-3 py-1.5 text-sm outline-none transition-all duration-200 text-red-700 bg-red-50 shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500",
    
    // Table Input Styles (from tableClasses.js)
    tableTopHeaderStandard: "px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-64 transition-all",
    tableTopHeaderCompact: "px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs w-56 transition-all",
    tableTopHeaderExtraCompact: "px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-[11px] w-48 transition-all",
    tableTopHeaderCompactMinimal: "px-4 py-1.5 border border-blue-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm w-64 transition-all shadow-sm text-gray-700",

    // Vertical Form Input Styles (from verticalClasses.js)
    verticalStandard: "border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500",
    verticalHorizontalLabel: "border border-blue-400 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm",
    verticalHorizontalLabelAligned: "border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:border-blue-500 text-sm",
    verticalNoLabel: "border-b-2 border-gray-300 px-2 py-3 w-full focus:outline-none focus:border-blue-500 bg-gray-50",
    verticalLargeText: "border-2 border-gray-400 rounded-xl px-5 py-4 w-full text-2xl focus:outline-none focus:border-black font-medium"
};

const PREDEFINED_BUTTON_CLASSES = {
    default: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition duration-150 shadow-sm cursor-pointer",
    
    // Vertical Form Button Styles (from verticalClasses.js)
    verticalStandard: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition duration-150 shadow-sm cursor-pointer",
    verticalHorizontalLabel: "bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-150 cursor-pointer whitespace-nowrap",
    verticalHorizontalLabelAligned: "bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1 rounded transition duration-150 cursor-pointer whitespace-nowrap w-full",
    verticalNoLabel: "bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded shadow cursor-pointer whitespace-nowrap",
    verticalLargeText: "bg-black hover:bg-gray-800 text-white font-bold px-6 py-4 rounded-xl text-xl transition cursor-pointer whitespace-nowrap"
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

export { applyDefaultStyles, PREDEFINED_CLASSES, PREDEFINED_BUTTON_CLASSES };
