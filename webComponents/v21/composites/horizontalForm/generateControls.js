export function generateControls(element) {
    const controls = {};

    // Get the array of row configurations from the _options property
    // We expect element._options to be an array of objects
    const columnsArray = element._options;

    if (!Array.isArray(columnsArray)) {
        console.warn("ks-horizontal-form expects _options to be an array of column configurations.");
        return controls;
    }

    // Generate a ks-horizontal-form-row for each config in the array
    columnsArray.forEach((colConfig, index) => {
        const row = document.createElement("ks-horizontal-form-row");
        row._options = colConfig;
        
        // Pass the theme string as an attribute so getContainer in the row picks it up correctly
        if (colConfig.theme) {
            row.setAttribute("ks-theme", colConfig.theme);
        }
        
        // Save the row to the controls object with a unique key
        controls[`row_${index}`] = row;
    });

    return controls;
}
