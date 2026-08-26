# Developer & Component Architecture Guide

> **Quick Cross-Navigation**: 
> 📄 [HTML Version (`docs/dev.html`)](https://keshavsoft.github.io/ks-web-components/dev.html) | 📖 [README.md](./README.md) | 🏗️ [ARCHITECTURE.md](./ARCHITECTURE.md) | 💡 [HOWTO.md](./HOWTO.md) | 📦 [NPM Package](https://www.npmjs.com/package/ks-web-components) | 🐙 [GitHub Repo](https://github.com/keshavsoft/ks-web-components)

---

Welcome to the internal developer guide for `ks-web-components`. This repository manages custom HTML elements and Tailwind CSS token registries.

---

## 1. Directory Structure

```text
ks-web-components/
├── webComponents/                # Source Web Components & Token Registries
│   └── v12/                      # Active Version 12 Modules
│       ├── KsTableCellContent.js # Custom Element Definition (<ks-table-cell-content-common>)
│       └── options/              # Tailwind Token Registries (Text, Buttons, Inputs)
├── dist/                         # Distribution CDN Bundles
│   └── v12/
│       └── ks-web-components.js  # Compiled CDN Production Bundle
├── docs/                         # Live GitHub Pages Documentation
├── bin/                          # CLI Executable (npx ks-web-components init)
└── vite.config.js                # Vite Bundle Configuration
```

---

## 2. Creating New Web Components

1. Define a standard Custom Element extending `HTMLElement`.
2. Register the tag using `customElements.define('tag-name', ClassName)`.
3. Export predefined Tailwind utility class maps in `webComponents/v12/options/`.

---

## 3. Building for Production

To compile the bundle to `dist/v12/`:

```bash
npm run build
```

---

## 🌐 Documentation Links & References

* 📄 **HTML Developer Guide**: [docs/dev.html](https://keshavsoft.github.io/ks-web-components/dev.html)
* 📖 **Main README**: [README.md](./README.md)
* 💡 **How-To Tutorials**: [HOWTO.md](./HOWTO.md)
* 📦 **NPM Package**: [ks-web-components](https://www.npmjs.com/package/ks-web-components)
