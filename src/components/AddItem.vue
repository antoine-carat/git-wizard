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
  justify-content: space-evenly;
  text-align: left;

  margin: 1% 0%;
  width: 80%;

  input {
    margin: 0%;
    width: 90%;
  }

  button {
    margin: 0%;
    width: 9%;
  }
}
</style>
