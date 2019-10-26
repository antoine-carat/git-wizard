<template>
  <div id="app">
    <h1>myawesometodolist.ie</h1>
    <Frame :items="this.items" />
  </div>
</template>

<script>
import store from "./store";
import Frame from "./components/Frame.vue";

export default {
  name: "app",
  components: {
    Frame
  },
  computed: {
    items () {
      return store.state.items
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  flex-flow: column wrap;
  align-content: center;
}
</style>
