<template>
  <button class="button--relative" :class="{ 'button--will-load': willLoad }" :aria-busy="loading"
    :disabled="loading || disabledOverride" v-on="listeners">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "UiButton",
  props: {
    loading: {
      type: Boolean,
      default: null,
    },
    disabledOverride: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    listeners() {
      return this.$listeners;
    },
    willLoad() {
      return this.loading !== null;
    },
  },
};
</script>
