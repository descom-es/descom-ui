<template>
  <button
    class="button--relative"
    :class="{'button--will-load' : willLoad}"
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
      default: null,
    },
  },

  computed: {
    listeners() {
      return this.$listeners
    },
    willLoad() {
      return this.loading !== null
    },
  },
}
</script>
