<template>
  <iframe class="iframe" :src="iframeSrc"></iframe>
</template>

<script>
  export default {
    name: "Integration",

    mounted() {
      Workato.handleNavigation({
        onWorkatoNavigation: ({embeddingUrl, urlReplaced, preventVendorUrlChange}) => {
          // Preventing URL change as it will be done by Vue in `$router.replace` and `$router.push` method calls below
          preventVendorUrlChange();

          if (urlReplaced) {
            this.$router.replace(embeddingUrl);
          } else {
            this.$router.push(embeddingUrl);
          }
        },
        onVendorNavigation(event) {
          if (event.reason === 'link') {
            // Preventing URL change as it will be done by Vue
            event.preventVendorUrlChange();
          }

          // Also preventing Workato URL change as it will be done in `beforeRouteUpdate` method after Vue
          // will change current URL
          event.preventWorkatoUrlChange();
        }
      });
    },

    async beforeRouteEnter(to, from, next) {
      const token = await fetch('/workato-jwt').then(res => res.json());
      next(vm => vm.setToken(token));
    },

    beforeRouteUpdate(to, from, next) {
      Workato.navigateTo(Workato.extractWorkatoUrl(to.fullPath));
      next();
    },

    destroyed() {
      Workato.disableNavigationHandling();
    },

    data() {
      return {
        iframeSrc: null
      }
    },

    methods: {
      setToken(token) {
        this.iframeSrc = Workato.generateIFrameUrl(token);
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
