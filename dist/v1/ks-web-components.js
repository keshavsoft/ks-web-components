//#region webComponents/v7/cellRenderers/renderArrayView.js
function e(e, t) {
	let n = document.createElement("button");
	n.textContent = `View (${t.length})`, n.style.cssText = "padding: 0.25rem 0.5rem; font-size: 0.75rem; font-weight: 500; color: #374151; background-color: #f3f4f6; border-radius: 0.375rem; border: 1px solid #d1d5db; cursor: pointer;", n.onmouseover = () => n.style.backgroundColor = "#e5e7eb", n.onmouseout = () => n.style.backgroundColor = "#f3f4f6", e.appendChild(n);
}
//#endregion
//#region webComponents/v7/cellRenderers/renderDefault.js
function t(e, t) {
	typeof t == "object" && t && (t = JSON.stringify(t)), t ??= "", e.textContent = t;
}
//#endregion
//#region webComponents/v7/cellRenderers/renderInputControl/v7/1-createInputElement/typeLayer.js
var n = [
	"text",
	"password",
	"email",
	"number",
	"tel",
	"url",
	"search",
	"date",
	"time",
	"datetime-local",
	"month",
	"week",
	"color",
	"range",
	"checkbox",
	"radio",
	"file",
	"hidden",
	"submit",
	"reset",
	"button",
	"image"
], r = (e, t) => {
	let r = (t.controlType || "text").toLowerCase();
	e.type = n.includes(r) ? r : "text";
}, i = (e, t) => {
	t.placeholder && (e.placeholder = t.placeholder), t.value !== void 0 && (e.value = t.value), t.name && (e.name = t.name), t.id && (e.id = t.id);
}, a = (e, t) => {
	t.min !== void 0 && (e.min = t.min), t.max !== void 0 && (e.max = t.max), t.step !== void 0 && (e.step = t.step), t.maxLength !== void 0 && (e.maxLength = t.maxLength), t.pattern && (e.pattern = t.pattern);
}, o = (e, t) => {
	t.required && (e.required = !0), t.disabled && (e.disabled = !0), t.readOnly && (e.readOnly = !0), t.checked && (e.checked = !0), t.multiple && (e.multiple = !0);
}, s = (e) => {
	let t = e, n = document.createElement("input"), i = document.createElement("datalist"), a = "datalist-" + Math.random().toString(36).substr(2, 9);
	return n.setAttribute("list", a), i.id = a, t.listData && Array.isArray(t.listData) && t.listData.forEach((e) => {
		let t = document.createElement("option");
		typeof e == "object" && e ? (t.value = e.value, t.label = e.text, t.textContent = e.text) : t.value = e, i.appendChild(t);
	}), r(n, t), n.__dataListElement = i, n;
}, c = (e) => {
	let t = e, n = document.createElement("select");
	return t.listData && Array.isArray(t.listData) && t.listData.forEach((e) => {
		let t = document.createElement("option");
		typeof e == "object" && e ? (t.value = e.value, t.textContent = e.text) : (t.value = e, t.textContent = e), n.appendChild(t);
	}), n;
}, l = {
	showLogs: !1,
	log: function(...e) {
		this.showLogs && console.log(...e);
	}
}, u = (e) => {
	let t = e;
	l.log(t, "----------");
	let n;
	return t.controlType === "datalist" ? n = s(t) : t.controlType === "select" ? n = c(t) : (n = document.createElement("input"), r(n, t)), i(n, t), a(n, t), o(n, t), n;
}, d = {
	default: "width: 100%; box-sizing: border-box; border: 1px solid #d1d5db; border-radius: 0.375rem; padding: 0.375rem 0.75rem; font-size: 0.875rem; outline: none; transition: all 0.2s ease-in-out; color: #374151; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);",
	minimal: "width: 100%; box-sizing: border-box; border: none; border-bottom: 2px solid #d1d5db; border-radius: 0; padding: 0.375rem 0.5rem; font-size: 0.875rem; outline: none; transition: all 0.2s ease-in-out; color: #374151; background-color: transparent;",
	pill: "width: 100%; box-sizing: border-box; border: 1px solid #d1d5db; border-radius: 9999px; padding: 0.375rem 1rem; font-size: 0.875rem; outline: none; transition: all 0.2s ease-in-out; color: #374151; background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);",
	danger: "width: 100%; box-sizing: border-box; border: 1px solid #ef4444; border-radius: 0.375rem; padding: 0.375rem 0.75rem; font-size: 0.875rem; outline: none; transition: all 0.2s ease-in-out; color: #b91c1c; background-color: #fef2f2; box-shadow: 0 1px 2px 0 rgba(239, 68, 68, 0.1);"
}, f = (e, t) => {
	let n = t.theme && d[t.theme] ? t.theme : "default";
	e.style.cssText = d[n], t.className && (e.className = t.className);
}, p = (e) => {
	e.addEventListener("focus", () => {
		e.style.borderColor = "#3b82f6", e.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.3)";
	}), e.addEventListener("blur", () => {
		e.style.borderColor = "#d1d5db", e.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
	});
}, m = (e, t = null) => {
	let n = t || {
		controlType: "text",
		placeholder: "Enter value..."
	}, r = u(n);
	f(r, n), p(r), e.appendChild(r), r.__dataListElement && e.appendChild(r.__dataListElement);
}, h = class extends HTMLElement {
	constructor() {
		super(), this.attachShadow({ mode: "open" }), this._inputs = {};
	}
	set inputs(e) {
		this._inputs = e, this.render();
	}
	render() {
		let n = this._inputs.cellValue;
		this._inputs.rowData;
		let r = this._inputs.options || {};
		if (this.shadowRoot.innerHTML = "", r.dataKey || r.name) {
			let e = r.name || r.dataKey;
			this.setAttribute("name", e), this.name = e;
		}
		if (r.id && (this.setAttribute("id", r.id), this.id = r.id), r?.showInput) {
			m(this.shadowRoot, r);
			return;
		}
		if (Array.isArray(n)) {
			e(this.shadowRoot, n);
			return;
		}
		t(this.shadowRoot, n);
	}
	get value() {
		let e = this.shadowRoot.querySelector("input, select, textarea");
		if (e) return e.type === "checkbox" ? e.checked : e.value;
	}
};
customElements.get("ks-table-cell-content-common") || customElements.define("ks-table-cell-content-common", h), window.ks = window.ks || {}, window.ks.webComponents = window.ks.webComponents || {}, Object.assign(h, window.ks.webComponents.KsTableCellContent || {}), window.ks.webComponents.KsTableCellContent = h;
//#endregion
export { h as KsTableCellContent };
