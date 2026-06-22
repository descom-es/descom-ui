# Descom Ui Components

Common Vue.js components we use at descom.

> **Vue 3 only.** A partir de la v1.0.0 este paquete requiere **Vue 3** (`vue@^3.5`).
> Para Vue 2 usa una versión `0.x`.

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
import 'descom-ui/dist/descom-ui.css'
```

Or register every component globally as a plugin:

```js
import { createApp } from 'vue'
import DescomUi from 'descom-ui'
import 'descom-ui/dist/descom-ui.css'

createApp(App).use(DescomUi).mount('#app')
```

## Migrating from 0.x (Vue 2)

`UiInput` now uses the Vue 3 `v-model` contract. If you were binding `:value` / `@input`
manually, switch to `v-model` (it maps to `modelValue` / `update:modelValue` internally):

```html
<UiInput v-model="text" />
```
