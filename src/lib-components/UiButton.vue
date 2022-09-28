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

<style scoped lang="scss">
button,
.button {
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.2em;

  text-align: center;
  font-weight: lighter;
  font-size: 1em;
  &::first-letter {
    text-transform: uppercase;
  }

  &--relative {
    position: relative;
    overflow: hidden;
  }

  color: white;
  background-color: #007bff;
  &:hover {
    background-color: #0069d9;
  }

  outline-color: none;
  transition: all 0.2s ease-out;
  &:focus,
  &:active {
    outline: 2px solid #8ab4f8;
  }

  &--clean {
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }

    outline-color: transparent;
    &:focus {
      outline: 2px solid transparent;
    }
  }
  &--delete {
    color: red;
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }

    outline-color: transparent;
    &:focus {
      outline: 2px solid transparent;
    }

    & svg {
      fill: lightcoral;
      height: 20px;
      width: 20px;

      transition: fill 0.25s ease-out;
      &:hover {
        fill: red;
      }
    }
  }
  &--wide {
    padding: 1em;
    width: 100%;

    &--big {
      font-size: 1.2em;
      padding: 2em;
    }
  }
  &--small {
    padding: 0.5em;
  }
  &--inline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  &--link {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    color: #70a5fa;
    text-decoration: underline;

    background-color: transparent;

    &:hover {
      background-color: transparent;
    }

    outline-color: transparent;
    &:focus {
      outline: 2px solid transparent;
    }
  }
  &--unavailable {
    cursor: not-allowed;
    background-color: #e0e0e0;
    &:hover {
      background-color: #e0e0e0;
    }

    outline-color: transparent;
    &:focus {
      outline: 2px solid transparent;
    }
  }

  &[aria-busy='true'] {
    cursor: progress;

    background-color: #e0e0e0;
    &:hover {
      background-color: #e0e0e0;
    }

    outline-color: transparent;
    &:focus {
      outline: 2px solid transparent;
    }

    & span {
      position: relative;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 150%;
      height: 100%;
      background: repeating-linear-gradient(
        60deg,
        transparent,
        transparent 0.75rem,
        #b7b7b7 0.75rem,
        #b7b7b7 1.5rem
      );
      animation: load 1s infinite linear;
    }

    @keyframes load {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-1.75rem);
      }
    }
  }
}
</style>
