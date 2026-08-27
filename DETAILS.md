# Deep Dive: Schema-Driven Form Components (v21)

`ks-web-components` has evolved to support powerful, schema-driven form generation starting in `v21`. This allows developers to build entire forms simply by passing a JSON configuration array to a single master composite component, drastically reducing boilerplate and ensuring consistent design.

## The `ks-horizontal-form` Composite

The `ks-horizontal-form` is the master wrapper for horizontal forms. 

### Usage

Instead of manually creating and styling each form row, you can now instantiate a single `<ks-horizontal-form>` and pass an array of row configurations to its `_options` property.

```javascript
import { ksHorizontalForm } from 'ks-web-components';

// 1. Define your schema
const formSchema = [
    {
        theme: "split-30-70",
        order: "label,input",
        labelText: "First Name",
        inputType: "text",
        inputPlaceholder: "Enter your first name..."
    },
    {
        theme: "split-30-70",
        order: "label,input",
        labelText: "Email Address",
        inputType: "email",
        inputPlaceholder: "name@example.com"
    }
];

// 2. Instantiate the form
const form = document.createElement("ks-horizontal-form");

// 3. Pass the schema
form._options = formSchema;

// 4. (Optional) Set the overall form container theme (e.g., gap, padding)
form.setAttribute("ks-theme", "default");

// 5. Render
document.body.appendChild(form);
```

### Supported Layout Themes

The horizontal form row supports a variety of themes powered by CSS Grid to ensure pixel-perfect alignment without relying on arbitrary or fragile CSS variants.

You can specify these in the `theme` property of your row configuration:

- `"default"`: Standard flex layout.
- `"borderless"`: Flex layout without padding/borders.
- `"compact"`: Tighter gaps and smaller text.
- `"borderless-center-anchor"`: A perfect 50/50 split where the label is right-aligned and the input is left-aligned, meeting exactly in the center.
- `"split-50-50"`: 50% / 50% split.
- `"split-40-60"`: 40% / 60% split.
- `"split-60-40"`: 60% / 40% split.
- `"split-30-70"`: 30% / 70% split.
- `"split-70-30"`: 70% / 30% split.

## Architecture Highlights

- **Semantic HTML**: The master `ks-horizontal-form` composite generates a true native `<form>` element under the hood, making it accessible and ready for native submission events.
- **Tailwind Native**: All themes map strictly to standard Tailwind CSS classes (e.g., `grid-cols-[3fr_7fr]`), avoiding problematic arbitrary selectors (like `[&>*:first-child]`) ensuring perfect compilation and purge behavior.
- **Component Composition**: Under the hood, `ks-horizontal-form` dynamically generates `<ks-horizontal-form-row>` elements, which in turn compose atomic `<ks-web-component>` elements representing your labels, inputs, checkboxes, and buttons.
