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
  font-family: Arial, Helvetica, sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5em 1em;

  border: none;
  border-radius: 0.2em;

  text-align: center;
  font-weight: lighter;
  font-size: 1em;
  &::first-letter {
    text-transform: uppercase;
  }

  color: white;
  background-color: #007bff;
  &:hover {
    background-color: #0069d9;
  }

  outline-color: transparent;
  transition: all 0.2s ease-out;
  &:focus,
  &:active {
    outline: 2px solid #8ab4f8;
  }

  &--relative {
    position: relative;
    overflow: hidden;
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

    &[aria-busy='true'] {
      background-color: transparent;
      color: #70a5fa;

      &:hover {
        background-color: transparent;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 150%;
        height: 100%;
        background: none;
        animation: none;
      }
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
    color: white;

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

  // COLORS
  &--primary {
    color: white;
    background-color: #007bff;
    &:hover {
      background-color: #0069d9;
    }

    outline-color: transparent;
    &:focus,
    &:active {
      outline-color: #8ab4f8;
    }
  }
  &--secondary {
    color: white;
    background-color: #6c757d;
    &:hover {
      background-color: #5a6268;
    }

    outline-color: transparent;
    &:focus,
    &:active {
      outline-color: rgba(108, 117, 125, 0.5);
    }
  }
  &--success {
    color: white;
    background-color: #29a745;
    &:hover {
      background-color: #218838;
    }

    outline-color: transparent;
    &:focus,
    &:active {
      outline-color: rgba(40, 167, 69, 0.5);
    }
  }
  &--danger {
    color: white;
    background-color: #dc3545;
    &:hover {
      background-color: #c82332;
    }

    outline-color: transparent;
    &:focus,
    &:active {
      outline-color: rgba(220, 53, 69, 0.5);
    }
  }
  &--warning {
    color: white;
    background-color: #ffc108;
    &:hover {
      background-color: #e0a800;
    }

    outline-color: transparent;
    &:focus,
    &:active {
      outline-color: rgba(255, 193, 7, 0.5);
    }
  }
  &--info {
    color: white;
    background-color: #17a2b8;
    &:hover {
      background-color: #138496;
    }

    outline-color: transparent;
    &:focus,
    &:active {
      outline-color: rgba(23, 162, 184, 0.5);
    }
  }
  &--light {
    color: #212529;
    background-color: #f8f9fa;
    &:hover {
      background-color: #e2e6e9;
    }

    outline-color: transparent;
    &:focus,
    &:active {
      outline-color: rgba(248, 249, 250, 0.5);
    }
  }
  &--dark {
    color: white;
    background-color: #343a40;
    &:hover {
      background-color: #23272b;
    }

    outline-color: transparent;
    &:focus,
    &:active {
      outline-color: rgba(52, 58, 64, 0.5);
    }
  }
}
</style>
