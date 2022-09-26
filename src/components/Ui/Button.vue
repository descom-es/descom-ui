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

<style lang="scss">
// // button {
// //   margin: 0;
// // }

// // button,
// // [type='button'],
// // [type='reset'],
// // [type='submit'] {
// //   -webkit-appearance: button;
// // }

// // [role='button'] {
// //   display: inline-block;
// //   text-decoration: none;
// // }

// // button,
// // input[type='submit'],
// // input[type='button'],
// // input[type='reset'],
// // [role='button'] {
// //   position: relative;
// //   cursor: pointer;
// //   padding: 0.5em 2em;
// //   text-align: center;

// //   &[aria-busy='true'] {
// //     cursor: progress;

// //     &:before {
// //       content: '';
// //       display: inline-block;
// //       width: 0.9em;
// //       height: 0.9em;
// //       border: 0.1em solid currentColor;
// //       border-radius: 0.9em;
// //       border-right-color: transparent;
// //       vertical-align: text-bottom;
// //       animation: spinner 0.75s linear infinite;
// //       opacity: 0.3;
// //     }
// //   }
// // }

// // :where(button, [type='submit'], [type='button'], [type='reset'], [role='button'])[disabled],
// // :where(fieldset[disabled])
// //   :is(button, [type='submit'], [type='button'], [type='reset'], [role='button']),
// // a[role='button']:not([href]) {
// //   pointer-events: none;
// // }

// // @keyframes spinner {
// //   to {
// //     transform: rotate(360deg);
// //   }
// }

// button {
//   background-color: #8ab4f8;

//   text-transform: capitalize;
//   text-align: center;

//   outline: none;

//   transition: all 0.2s ease-out;
//   &:focus {
//     outline: 2px solid #8ab4f8;
//   }
// }
</style>
