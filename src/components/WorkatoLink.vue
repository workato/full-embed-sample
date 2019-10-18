<template>
  <RouterLink :to="internalUrl" :class="{[activeClass]: active}">
    <slot></slot>
  </RouterLink>
</template>

<script>
  import {getInternalUrl} from "@/utils";

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
        return getInternalUrl(this.href);
      },

      active() {
        const activeOn = [
          this.href,
          ...(this.activeOn || [])
        ];
        const inactiveOn = this.inactiveOn || [];
        const currentPath = this.$route.path;

        return (
          activeOn.some(activePath => currentPath.startsWith(getInternalUrl(activePath))) &&
          !inactiveOn.some(inactivePath => currentPath.startsWith(getInternalUrl(inactivePath)))
        );
      }
    }
  }
</script>
