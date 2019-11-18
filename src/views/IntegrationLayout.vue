<template>
  <div class="IntegrationLayout">
    <SidePanel class="IntegrationLayout__aside"></SidePanel>
    <div class="IntegrationLayout__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import SidePanel from "@/components/SidePanel";

  export default {
    name: "IntegrationLayout",
    components: { SidePanel }
  }
</script>

<style lang="scss">
  .IntegrationLayout {
    flex: 1 1 auto;
    display: flex;
    align-items: stretch;

    &__content {
      position: relative;
      flex: 1 1 auto;
    }

    &__aside {
      width: 250px;
    }
  }
</style>
