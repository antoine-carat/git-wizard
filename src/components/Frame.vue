<template>
  <div class="frame">
    <span class="item" v-for="item in items" :key="item.title">
      <span class="title" :class="{stroke: item.done}">{{ item.title }}</span>
      <input type="checkbox" class="box" name="" id="" v-model="item.done">
    </span>
    <AddItemField />
  </div>
</template>

<script>
import AddItemField from "./AddItem.vue";

export default {
  name: "Frame",
  components: {
    AddItemField
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.frame {
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  justify-content: space-evenly;

  border: 1px dashed #2c3e50;
  padding: 1%;
  width: 80%;

  .item {
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    justify-content: space-between;
    text-align: left;

    border: 1px solid #2c3e50;
    padding: 1%;
    margin: 1% 0%;
    width: 98%;

    .title {
      &.stroke {
        text-decoration: line-through;
      } 
    }
  }
}
</style>
