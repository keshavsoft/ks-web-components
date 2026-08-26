# How-To Tutorials & Token Recipes

> **Quick Cross-Navigation**: 
> 📄 [HTML Version (`docs/howto.html`)](https://keshavsoft.github.io/ks-web-components/howto.html) | 📖 [README.md](./README.md) | 🛠️ [DEV.md](./DEV.md) | 🏗️ [ARCHITECTURE.md](./ARCHITECTURE.md) | 📦 [NPM Package](https://www.npmjs.com/package/ks-web-components) | 🐙 [GitHub Repo](https://github.com/keshavsoft/ks-web-components)

---

## 1. How to Use `<ks-table-cell-content-common>` in Custom HTML

Include the bundle and use the tag anywhere in your DOM:

```html
<script src="https://keshavsoft.github.io/ks-web-components/dist/v12/ks-web-components.js" type="module"></script>

<ks-table-cell-content-common 
    control-type="select"
    class-name="w-64 border border-slate-300 rounded px-2 py-1">
</ks-table-cell-content-common>
```

---

## 2. Using Predefined Tailwind Design Tokens

`ks-web-components` exports structured styling tokens:

```javascript
import { PREDEFINED_TEXT_CLASSES } from "https://keshavsoft.github.io/ks-web-components/dist/v12/ks-web-components.js";

// Token values:
// PREDEFINED_TEXT_CLASSES['table.cell.primary']   -> "font-semibold text-slate-900"
// PREDEFINED_TEXT_CLASSES['table.cell.numeric']   -> "font-mono text-right text-indigo-600"
```

---

## 🌐 Documentation Links & References

* 📄 **HTML How-To Guide**: [docs/howto.html](https://keshavsoft.github.io/ks-web-components/howto.html)
* 📖 **Main README**: [README.md](./README.md)
* 🛠️ **Developer Guide**: [DEV.md](./DEV.md)
* 📦 **NPM Package Page**: [ks-web-components](https://www.npmjs.com/package/ks-web-components)
