<template>
  <div class="Search">
    <input class="Search__input" placeholder="Quick find..." type="text"/>
    <div class="Search__button"></div>
  </div>
</template>

<style lang="scss">
  .Search {
    position: relative;
    margin-left: 25px;

    &__input {
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

    &__button {
      cursor: pointer;
      position: absolute;
      width: 22px;
      height: 22px;
      top: 5px;
      right: 5px;
      background: url("../assets/search.png") center / contain no-repeat;
    }
  }
</style>
