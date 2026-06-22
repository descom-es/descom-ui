<template>
  <div class="ui-input" :class="{ 'field': isField }">
    <slot name="label" v-if="!isField">
      <label v-if="label" :for="id" :class="{ 'is-required': isRequired }">
        {{ label }}
      </label>
    </slot>

    <input :aria-busy="loading" :disabled="loading" :id="id" :value="model" ref="inputRef" v-bind="$attrs"
      @input="inputHandler" />

    <label v-if="label && isField" :for="id" :class="{ 'is-required': isRequired }">
      {{ label }}
    </label>

    <span v-if="errorMessage" class="validation-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, useId, useAttrs } from 'vue'

defineOptions({
  name: 'UiInput',
  inheritAttrs: false,
})

const props = defineProps({
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
})

// v-model: sustituye la prop `value` + emit `input` de Vue 2
const model = defineModel({
  type: [String, Number],
  default: null,
})

const attrs = useAttrs()
const uid = useId()
const inputRef = ref(null)
const isValid = ref(null)
const errorMessage = ref(null)

const id = computed(() => props.idOverride || uid)
const isRequired = computed(() => attrs.required !== undefined)

function getIsValid() {
  if (!inputRef.value) {
    return null
  }

  return inputRef.value.validity.valid
}

function getErrorMessage() {
  if (!inputRef.value) {
    return null
  }

  return inputRef.value.validationMessage
}

function inputHandler(event) {
  model.value = event.target.value

  setTimeout(() => {
    isValid.value = getIsValid()
    errorMessage.value = getErrorMessage()
  }, 1)
}

watch(
  () => props.errors,
  () => {
    setTimeout(() => {
      const customErrorMessage = props.errors.length
        ? props.errors.join('\n')
        : ''

      inputRef.value.setCustomValidity(customErrorMessage)
      isValid.value = getIsValid()
      errorMessage.value = getErrorMessage()
    }, 1)
  }
)

onMounted(() => {
  if (props.autofocus) {
    inputRef.value.focus()
  }
})
</script>
