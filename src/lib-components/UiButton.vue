<template>
  <button
    class="button--relative"
    :aria-busy="loading"
    :disabled="loading"
    v-on="listeners"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'UiButton',

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    listeners() {
      return this.$listeners
    },
  },
}
</script>
