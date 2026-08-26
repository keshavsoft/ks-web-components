# System Architecture & Token Tokenomics

> **Quick Cross-Navigation**: 
> 📄 [HTML Version (`docs/architecture.html`)](https://keshavsoft.github.io/ks-web-components/architecture.html) | 📖 [README.md](./README.md) | 🛠️ [DEV.md](./DEV.md) | 💡 [HOWTO.md](./HOWTO.md) | 📦 [NPM Package](https://www.npmjs.com/package/ks-web-components) | 🐙 [GitHub Repo](https://github.com/keshavsoft/ks-web-components)

---

## 1. High-Level Architecture Overview

`ks-web-components` provides the low-level custom element definitions and Tailwind CSS design token mappings consumed by higher-level framework orchestrators like `jsTableBuilderViews`.

```text
+-------------------------------------------------------------------------+
|                  jsTableBuilderViews (Framework Engine)                 |
+-------------------------------------------------------------------------+
                                     |
               Consumes Tokens & Custom HTML Element Tags
                                     v
+-------------------------------------------------------------------------+
|                    ks-web-components (Component Layer)                  |
|                                                                         |
|  +-----------------------------------+  +----------------------------+  |
|  | <ks-table-cell-content-common>    |  | Tailwind Token Registries  |  |
|  | HTMLElement Custom Tag            |  | PREDEFINED_TEXT_CLASSES    |  |
|  +-----------------------------------+  +----------------------------+  |
+-------------------------------------------------------------------------+
```

---

## 2. Design Token Registry Matrix

| Token Key | Tailwind Utility Target | Use Case |
| :--- | :--- | :--- |
| `table.cell.primary` | `font-semibold text-slate-900` | Primary text columns (Item names, voucher IDs) |
| `table.cell.numeric` | `font-mono text-right text-indigo-600` | Financial amounts, quantities, rates |
| `table.cell.bold` | `font-extrabold text-slate-900` | Total summary rows |
| `table.cell.centered` | `text-center` | Badges, serial numbers, status columns |

---

## 🌐 Documentation Links & References

* 📄 **HTML System Architecture**: [docs/architecture.html](https://keshavsoft.github.io/ks-web-components/architecture.html)
* 📖 **Main README**: [README.md](./README.md)
* 🛠️ **Developer Guide**: [DEV.md](./DEV.md)
* 📦 **NPM Package Page**: [ks-web-components](https://www.npmjs.com/package/ks-web-components)
