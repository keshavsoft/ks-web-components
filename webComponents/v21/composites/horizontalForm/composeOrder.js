export function composeOrder(container, controls) {
    // We simply append all rows in the order they were generated (which matches the array order)
    Object.keys(controls).forEach(key => {
        if (key.startsWith("row_")) {
            container.appendChild(controls[key]);
        }
    });
}
