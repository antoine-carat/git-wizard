<template>
  <div class="add-item">
    <input type="text" v-model="this.currentItem" name="" id="">
    <button @click="addItem()">Add</button>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "AddItemField",
  data() {
    return { currentItem: "New Item" }
  },
  methods: {
    addItem() {
      store.commit("addItem", this.currentItem);
      this.currentItem = "New Item";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-item {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: space-between;
  text-align: left;

  margin-top: 5%;
  padding-top: 1%;
  border-top: 1px solid lightgray;
  width: 100%;

  input {
    flex-grow: 1;
  }
}
</style>
