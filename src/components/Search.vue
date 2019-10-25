<template>
  <div class="search">
    <input placeholder="Quick find..." class="input" type="text">
    <div class="button"></div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
  .search {
    position: relative;
    margin-left: 25px;
  }

  .input {
    border: none;
    padding: 8px 34px 8px 20px;
    border-radius: 4px;
    width: 300px;
    font-size: 13px;
    background: #585b60;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }

  .button {
    cursor: pointer;
    position: absolute;
    width: 22px;
    height: 22px;
    top: 5px;
    right: 5px;
    background: url("../assets/search.png") center / contain no-repeat;
  }
</style>
