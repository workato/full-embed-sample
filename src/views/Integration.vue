<template>
  <iframe v-if="iframeSrc" class="IntegrationIframe" :src="iframeSrc"></iframe>
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
      const token = await getToken();
      next(vm => vm.updateIframeSrc(to.fullPath, token));
    },

    async beforeRouteUpdate(to, from, next) {
      if (Workato.loaded) {
        Workato.navigateTo(Workato.extractWorkatoUrl(to.fullPath));
        next();
      } else {
        // Removing currently loading iframe
        this.updateIframeSrc(null);
        // Requesting a token and updating an iframe `src`
        this.updateIframeSrc(to.fullPath, await getToken());
        next();
      }
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
      updateIframeSrc(embeddingUrl, token) {
        this.iframeSrc = embeddingUrl ?
          Workato.generateIFrameUrl(token, Workato.extractWorkatoUrl(embeddingUrl)) :
          null;
      }
    }
  };

  async function getToken() {
    return fetch('/workato-jwt').then(res => res.json());
  }
</script>

<style lang="scss">
  .IntegrationIframe {
    border: none;
    width: 100%;
    height: 100%;
  }
</style>
