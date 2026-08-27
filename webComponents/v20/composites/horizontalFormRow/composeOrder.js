export function composeOrder(container, controls, orderAttr) {
    const order = (orderAttr || "label,input,checkbox,button").split(",").map(s => s.trim().toLowerCase());

    order.forEach(controlName => {
        if (controls[controlName]) {
            container.appendChild(controls[controlName]);
        }
    });
}
