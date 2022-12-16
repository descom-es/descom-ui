# Descom Ui Components

Common Vue.js components we use at descom.

## Development

Dev server:
```bash
npm run serve
```

Build:
```bash
npm run build
```

## Components

All components will use the props passed to them as if they were html native attributes. Ej.: `:disabled="true"` will be passed as `disabled="true"` to the input inside the component.

### Button

Example:

```html
<UiButton class="button--primary" :loading="loading" @click="click">
  Click me!
</UiButton>
```

### Input

Example:

```html
<UiInput
  :loading="loading"
  label="This input can't be less than 0"
  type="number"
  v-model="text"
  placeholder="I'm a placeholder!"
  min="0"
/>
```

## Import

```js
import { UiInput, UiButton } from 'descom-ui'
import 'descom-ui/dist/descom-ui.min-default.css'
```

## Note

You may have to set the following env variable to get the package to work:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```
