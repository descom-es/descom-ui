<template>
  <div>
    <h1>descom-ui example page</h1>

    <main>
      <div class="panel">
        <h2>Controls</h2>
        <label>
          <input type="checkbox" v-model="loading" />
          <span>Loading</span>
        </label>
      </div>

      <div>
        <h2>Buttons:</h2>
        <div class="showcase">
          <UiButton class="button--primary" :loading="loading"
            >Click me!</UiButton
          >
          <UiButton class="button--secondary" :loading="loading"
            >Click me!</UiButton
          >
          <UiButton class="button--success" :loading="loading"
            >Click me!</UiButton
          >
          <UiButton class="button--danger" :loading="loading"
            >Click me!</UiButton
          >
          <UiButton
            class="button--warning"
            :loading="loading"
            :disabledOverride="true"
            >Click me!</UiButton
          >
          <UiButton class="button--info" :loading="loading">Click me!</UiButton>
          <UiButton class="button--light" :loading="loading"
            >Click me!</UiButton
          >
          <UiButton class="button--dark" :loading="loading">Click me!</UiButton>
          <UiButton class="button--link" :loading="loading">Click me!</UiButton>
        </div>
      </div>

      <div>
        <h2>Inputs:</h2>
        <div>
          <UiInput
            :loading="loading"
            label="This input is not required"
            placeholder="I'm a placeholder!"
            v-model="text"
          />
          <br />
          <UiInput
            :loading="loading"
            id-override="required"
            label="This input is required"
            placeholder="I'm a placeholder!"
            v-model="text"
            required
          />
          <br />
          <UiInput
            :loading="loading"
            id-override="number"
            label="This input can't be less than 0"
            type="number"
            v-model="text"
            placeholder="I'm a placeholder!"
            min="0"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import "../scss/core.scss";

export default {
  name: "DescomUiSample",
  data() {
    return {
      loading: false,
      text: "",
    };
  },
};
</script>

<style scoped lang="scss">
h1,
h2,
label {
  font-family: Arial, Helvetica, sans-serif;
}
h1,
h2 {
  margin: 0 0 0.5em 0;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1em;
}

.showcase {
  display: flex;
  flex-direction: row;
  gap: 1em;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1em;
}

.panel {
  border: 1px solid #ccc;
  border-radius: 0.2em;
  background-color: #eee;
  padding: 1em;
}
</style>
