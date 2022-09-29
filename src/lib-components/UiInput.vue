<template>
  <div class="ui-input">
    <slot name="label">
      <label v-if="label" :for="id" :class="{ 'is-required': isRequired }">
        {{ label }}
      </label>
    </slot>

    <input
      :aria-busy="loading"
      :disabled="loading"
      :id="id"
      :value="value"
      :ref="id"
      v-bind="$attrs"
      v-on="listeners"
      @input="inputHandler"
    />

    <span v-if="errorMessage" class="validation-error">
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

    loading: {
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

  mounted() {
    console.log('test')
  },

  methods: {
    inputHandler() {
      console.log('ASDJAJSD')
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
