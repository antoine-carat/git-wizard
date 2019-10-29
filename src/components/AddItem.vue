<template>
  <div class="add-item">
    <input type="text" placeholder="New item" name="" id="">
    <button>Add</button>
  </div>
</template>

<script>
export default {
  name: "AddItemField"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-item{
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
