<template>
  <div class="AppHeader">
    <MainMenu/>
    <router-link class="AppHeader__logo" to="/"></router-link>
    <Search/>
    <UserMenu/>
  </div>
</template>

<script>
  import Search from '@/components/Search'
  import MainMenu from "@/components/MainMenu";
  import UserMenu from "@/components/UserMenu";

  export default {
    name: 'AppHeader',
    components: { UserMenu, MainMenu, Search }
  }
</script>

<style lang="scss">
  .AppHeader {
    background: #33373e;
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 50px;
    flex: 0 0 auto;

    &__logo {
      margin-left: 30px;
      width: 125px;
      margin-right: auto;
      height: 30px;
      background: url("../assets/logo.png") center / contain no-repeat;
      flex: 0 0 auto;
    }
  }
</style>
