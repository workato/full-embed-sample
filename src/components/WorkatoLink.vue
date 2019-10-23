<template>
  <RouterLink :to="internalUrl" :class="{[activeClass]: active}">
    <slot></slot>
  </RouterLink>
</template>

<script>
  export default {
    name: "WorkatoLink",

    props: {
      href: String,
      activeOn: Array,
      inactiveOn: Array,
      activeClass: String
    },
    
    computed: {
      internalUrl() {
        return WorkatoApi.getInternalUrl(this.href);
      },

      active() {
        const activeOn = [
          this.href,
          ...(this.activeOn || [])
        ];
        const inactiveOn = this.inactiveOn || [];
        const currentPath = this.$route.path;

        return (
          activeOn.some(activePath => currentPath.startsWith(WorkatoApi.getInternalUrl(activePath))) &&
          !inactiveOn.some(inactivePath => currentPath.startsWith(WorkatoApi.getInternalUrl(inactivePath)))
        );
      }
    }
  }
</script>
