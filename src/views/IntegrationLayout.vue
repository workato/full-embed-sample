<template>
  <div class="integrations">
    <SidePanel class="aside"></SidePanel>
    <div class="content">
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

<style scoped lang="scss">
  .integrations {
    display: flex;
    align-items: stretch;
    height: 100%;
  }

  .aside {
    width: 300px;
  }

  .content {
    position: relative;
  }
</style>
