<template>
  <iframe class="iframe" :src="iframeSrc"></iframe>
</template>

<script>
  export default {
    name: "Integration",

    mounted() {
      WorkatoApi.handleNavigation({
        onWorkatoNavigation: ({internalUrl, urlReplaced, preventUrlChange}) => {
          preventUrlChange();

          if (urlReplaced) {
            this.$router.replace(internalUrl);
          } else {
            this.$router.push(internalUrl);
          }
        },
        onEmbeddingLinkClick({preventUrlChange}) {
          preventUrlChange();
        }
      });
    },

    async beforeRouteEnter(to, from, next) {
      const token = await fetch('/workato-jwt').then(res => res.json());
      next(vm => vm.setToken(token));
    },

    beforeRouteUpdate(to, from, next) {
      WorkatoApi.navigateTo(WorkatoApi.getWorkatoUrl(to.fullPath));
      next();
    },

    destroyed() {
      WorkatoApi.disableNavigationHandling();
    },

    data() {
      return {
        iframeSrc: null
      }
    },

    methods: {
      setToken(token) {
        this.iframeSrc = WorkatoApi.getIFrameUrl(token);
      }
    }
  }
</script>

<style scoped lang="scss">
  .iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
</style>
