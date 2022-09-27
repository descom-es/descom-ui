<template>
  <div class="ui-input" >
    <slot name="label">
      <label v-if="label" :for="id" :class="{ 'is-required': isRequired }">
        {{ label }}
      </label>
    </slot>

    <input :id="id" ref="input" :value="value" v-bind="$attrs" v-on="listeners" />

    <span v-if="errorMessage" class="error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'UiInput',

  props: {
    value: {
      type: [String, Number],
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    errors: {
      type: [Array, String],
      default: () => [],
    },
  },

  data() {
    return {
      isValid: null,
      errorMessage: null,
      dummy: {},
    }
  },

  computed: {
    id() {
      return this.$attrs.id || `uiinput_${this._uid}`
    },

    listeners() {
      return Object.assign({}, this.$listeners, {
        input: (event) => this.$emit('input', event.target.value),
      })
    },

    inputElement() {
      return this.$refs.input?.$el
    },

    isRequired() {
      return this.$attrs.required !== undefined
    },
  },

  watch: {
    value() {
      setTimeout(() => {
        this.isValid = this.getisValid()
        this.errorMessage = this.getErrorMessage()
      }, 1)
    },

    errors() {
      setTimeout(() => {
        const customErrorMessage = this.errors.length
          ? this.errors.join('\n')
          : ''

        this.inputElement.setCustomValidity(customErrorMessage)
        this.isValid = this.getisValid()
        this.errorMessage = this.getErrorMessage()
      }, 1)
    },
  },

  // mounted() {
  //   // this.isValid = this.getisValid()
  //   // this.errorMessage = this.getErrorMessage()
  // },

  methods: {
    getisValid() {
      if (this.inputElement === undefined) {
        return null
      }

      this.dummy.validity = Object.keys(this.inputElement.validity)
      this.dummy.validationMessage = this.inputElement.validationMessage

      return this.inputElement.validity.valid
    },

    getErrorMessage() {
      if (this.inputElement === undefined) {
        return null
      }

      return this.inputElement.validationMessage
    },
  },
}
</script>

<style lang="scss">
// .ui-component {
//   display: inline-block;

//   label {
//     display: block;
//     margin-bottom: 0.5em;
//     font-weight: bold;

//     &.is-required::before {
//       content: '*';
//       font-family: monospace;
//       color: var(--color-danger, rgb(255 0 0 / 0.8));
//     }
//   }
// }

// .error {
//   color: var(--color-danger, rgb(255 0 0 / 0.8));

//   &--validation {
//     font-family: monospace;
//   }
// }

// input,
// select,
// textarea {
//   position: relative;
//   padding: 0.5em 0.5em;
//   border-radius: 0.25em;
//   border: 1px solid rgb(0 0 0 / 0.1);
//   transition: 100ms border-color ease-in-out;
//   transition: 100ms box-shadow ease-in-out;

//   &:focus {
//     outline: none;
//     box-shadow: 0 0 5px 1px rgba(0 0 0 / 0.1);
//     border-color: var(--color-primary, rgba(0 0 0 / 0.1));
//   }

//   &:invalid {
//     border-color: var(--color-danger, rgb(255 0 0 / 0.5));
//   }
// }

// input::placeholder,
// input::-webkit-input-placeholder,
// textarea::placeholder,
// textarea::-webkit-input-placeholder {
//   color: rgba(0, 0, 0, 0.3);
//   opacity: 1;
// }

// input[type='date'] {
//   padding-top: 0.46em;
//   padding-bottom: 0.46em;
// }

.ui-input {
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  label {
    user-select: none;
    color: #5e5b5c;

    &.is-required::after {
      content: '*';
      vertical-align: 25%;
      font-family: monospace;
      color: var(--color-danger, rgb(255 0 0 / 0.8));
    }
  }

  input {
    display: block;
    padding: 0.5em;
    font-size: 1em;

    color: #000;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;

    transition: 0.2s outline-width;
    &:focus {
      outline: 2px solid #8ab4f8;
    }

    &:not(:placeholder-shown):invalid,
    .input--invalid {
      border-color: #f00;
    }
  }

  .validation-error {
    font-size: 0.85em;
    color: var(--color-danger, rgb(255 0 0 / 0.8));
    font-family: monospace;
  }
}
</style>
