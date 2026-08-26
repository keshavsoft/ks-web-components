# KeshavSoft ks-web-components

[![Docs Site](https://img.shields.io/badge/Docs-GitHub%20Pages-blue)](https://keshavsoft.github.io/ks-web-components/)
[![NPM Package](https://img.shields.io/badge/NPM-ks--web--components-red.svg)](https://www.npmjs.com/package/ks-web-components)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black.svg)](https://github.com/keshavsoft/ks-web-components)

> **Quick Navigation**: 📖 [Live Documentation Portal](https://keshavsoft.github.io/ks-web-components/) | 📦 [NPM Package Page](https://www.npmjs.com/package/ks-web-components) | 🐙 [GitHub Repository](https://github.com/keshavsoft/ks-web-components) | 📄 [HTML Version (`docs/readme.html`)](https://keshavsoft.github.io/ks-web-components/readme.html)

`ks-web-components` is a high-performance UI Custom HTML Web Component and Tailwind CSS design token library designed for rendering cell-level controls (`<ks-table-cell-content-common>`), dynamic dropdowns, date pickers, and formatted text fields.

---

## 🌟 Key Features

* **Custom HTML Web Components**: Zero-dependency `<ks-table-cell-content-common>` custom elements.
* **Predefined Tailwind Design Tokens**: Exported token maps (`PREDEFINED_TEXT_CLASSES`, `PREDEFINED_BUTTON_CLASSES`).
* **CDN ES Module Loaded**: Works out of the box via GitHub Pages CDN bundle (`/dist/v12/ks-web-components.js`).
* **Ecosystem Integration**: Built as the core cell-rendering dependency for [`jsTableBuilderViews`](https://github.com/keshavsoft/jsTableBuilderViews).

---

## 💻 Quick Start (CDN Usage)

Import the bundle directly in your HTML `<head>`:

```html
<!-- Load Web Components & Design Token Bundle -->
<script src="https://keshavsoft.github.io/ks-web-components/dist/v12/ks-web-components.js" type="module"></script>

<!-- Render Custom Cell Content Tag -->
<ks-table-cell-content-common
    control-type="select"
    class-name="w-48 border border-gray-300 rounded px-2 py-1">
</ks-table-cell-content-common>
```

---

## 🚀 CLI Scaffolding (`npx ks-web-components init`)

Scaffold Web Component source modules locally into your workspace:

```bash
npx ks-web-components init
```

---

## 🌐 Documentation Matrix

* 🛠️ **Developer & Build Guide**: [DEV.md](./DEV.md) | [docs/dev.html](https://keshavsoft.github.io/ks-web-components/dev.html)
* 💡 **How-To Tutorials**: [HOWTO.md](./HOWTO.md) | [docs/howto.html](https://keshavsoft.github.io/ks-web-components/howto.html)
* 🏗️ **System Architecture**: [ARCHITECTURE.md](./ARCHITECTURE.md) | [docs/architecture.html](https://keshavsoft.github.io/ks-web-components/architecture.html)
* 📖 **Docs Hub**: [docs/index.html](https://keshavsoft.github.io/ks-web-components/)
* 📦 **NPM Package**: [ks-web-components](https://www.npmjs.com/package/ks-web-components)
