<template>
  <div class="ui-input" :class="{ 'field': isField }">
    <slot name="label" v-if="!isField">
      <label v-if="label" :for="id" :class="{ 'is-required': isRequired }">
        {{ label }}
      </label>
    </slot>

    <input :aria-busy="loading" :disabled="loading" :id="id" :value="value" :ref="id" v-bind="$attrs" v-on="listeners"
      @input="inputHandler" />

    <label v-if="label && isField" :for="id" :class="{ 'is-required': isRequired }">
      {{ label }}
    </label>

    <span v-if="errorMessage" class="validation-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'UiInput',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    isField: {
      type: Boolean,
      default: false,
    },

    errors: {
      type: [Array, String],
      default: () => [],
    },

    loading: {
      type: Boolean,
      default: false,
    },

    idOverride: {
      type: String,
      default: null,
    },

    autofocus: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isValid: null,
      errorMessage: null,
    }
  },

  mounted() {
    if (this.autofocus) {
      this.inputElement.focus()
    }
  },

  computed: {
    id() {
      return this.idOverride || `uiinput_${this._uid}`
    },

    listeners() {
      return Object.assign({}, this.$listeners, {
        input: (event) => this.$emit('input', event.target.value),
      })
    },

    inputElement() {
      return document.getElementById(this.id)
    },

    isRequired() {
      return this.$attrs.required !== undefined
    },
  },

  watch: {
    errors() {
      setTimeout(() => {
        const customErrorMessage = this.errors.length
          ? this.errors.join('\n')
          : ''

        this.inputElement.setCustomValidity(customErrorMessage)
        this.isValid = this.getIsValid()
        this.errorMessage = this.getErrorMessage()
      }, 1)
    },
  },

  methods: {
    inputHandler() {
      setTimeout(() => {
        this.isValid = this.getIsValid()
        this.errorMessage = this.getErrorMessage()
      }, 1)
    },

    getIsValid() {
      if (this.inputElement === undefined) {
        return null
      }

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
