<template>
  <div class="UserMenu">
    <img ref="toggleButton"
      class="UserMenu__toggle"
      src="../assets/header__user.png"
      @click="opened = !opened"/>
    <Menu class="UserMenu__menu" :opened.sync="opened" :toggleButton="$refs.toggleButton">
      <a class="UserMenu__item"
        :href="`${workatoOrigin}/users/sign_out`"
        @click="opened = false">Sign out</a>
    </Menu>
  </div>
</template>

<script>
  import Menu from "@/components/Menu"
  import {config} from "@/config";

  export default {
    name: 'UserMenu',
    components: { Menu },
    data() {
      return {
        opened: false,
        workatoOrigin: config.workatoOrigin
      }
    }
  }
</script>

<style lang="scss">
  .UserMenu {
    position: relative;

    &__menu {
      right: 0;
      padding: 0;
      top: 44px;
    }

    &__toggle {
      width: 196px;
      height: 40px;
      margin-left: 10px;
      cursor: pointer;
    }

    &__item {
      display: block;
      padding: 10px;
      font-size: 15px;
      border-left: 4px solid transparent;

      &,
      &:link,
      &:visited,
      &:hover,
      &:active {
        color: #37434C;
        text-decoration: none;
      }

      &:hover {
        background: #DADFE3;
        border-left-color: #37434C;
      }
    }
  }
</style>
