# KS Web Components

[![GitHub Pages](https://img.shields.io/badge/docs-GitHub%20Pages-blue)](https://keshavsoft.github.io/ks-web-components/)

**KS Web Components** is a robust, JSON-driven Web Component library designed to dynamically render input cells, forms, and table components effortlessly. By exposing a single component (`ks-table-cell-content-common`), you can build complex, style-rich UIs just by passing it structured JSON configuration (`options`).

## Features
- **JSON-Driven UI**: Define text, buttons, and complex inputs (with native HTML behaviors) using a standard JSON options object.
- **Predefined Design System**: Comes bundled with unified JSON themes (`PREDEFINED_TEXT_CLASSES.json`, `PREDEFINED_BUTTON_CLASSES.json`) ensuring consistent Tailwind CSS styling across your entire app.
- **Native HTML Behaviors**: Full support for native inputs including `tabIndex`, `autofocus`, `spellcheck`, `minLength`, tooltips, and more, all configurable via simple properties.
- **Transportable Code**: Use the code directly from our CDN, or effortlessly extract the latest source files into your own project via NPX.

## Quick Start

### Option 1: Use via CDN (Recommended for quick testing)

Because this repository is served from the root on GitHub Pages, the `dist` folder natively acts as a fast, free CDN. You can drop this tag directly into your HTML:

```html
<script src="https://keshavsoft.github.io/ks-web-components/dist/v12/ks-web-components.js" type="module"></script>
```

Then simply use the web component anywhere in your DOM:
```html
<ks-table-cell-content-common></ks-table-cell-content-common>
```

### Option 2: Scaffold Locally (Extract source code)

If you want to modify the source code or integrate the raw components directly into your build pipeline, you can "transport" the source code into your project instantly:

```bash
npx ks-web-components init
```

This CLI command will extract the latest `webComponents/` source directory and the `index.js` registration file straight into your current working directory, allowing you complete control over the files.

## Documentation Showcase

Explore our interactive HTML documentation to visually test the design system and behaviors:
- [Interactive Showcase Hub](https://keshavsoft.github.io/ks-web-components/docs/index.html)
