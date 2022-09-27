<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DescomUiTest/>
    <UiInput/>
    <UiButton/>
  </div>
</template>

<script>
import DescomUiTest from './components/DescomUiTest.vue'
import UiInput from './components/Ui/Input.vue'
import UiButton from './components/Ui/Button.vue'

export default {
  name: 'App',
  components: {
    DescomUiTest,
    UiInput,
    UiButton,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
