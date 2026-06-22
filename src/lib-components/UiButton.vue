<template>
  <button class="button--relative" :class="{ 'button--will-load': willLoad }" :aria-busy="loading"
    :disabled="loading || disabledOverride">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: null,
  },
  disabledOverride: {
    type: Boolean,
    default: false,
  },
})

// En Vue 3 los listeners caen por fallthrough al elemento raíz (<button>),
// por lo que ya no hace falta el computed `listeners` ni `v-on`.
const willLoad = computed(() => props.loading !== null)
</script>
