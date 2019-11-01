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
    flex: 1 1 auto;
    display: flex;
    align-items: stretch;
  }

  .aside {
    width: 300px;
  }

  .content {
    position: relative;
  }
</style>
