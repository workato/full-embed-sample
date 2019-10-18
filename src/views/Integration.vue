<template>
  <iframe ref="iframe" class="iframe" :src="iframeSrc"></iframe>
</template>

<script>
  import {convertToWorkatoUrl, getInternalUrl, getFullWorkatoUrl} from "@/utils";

  export default {
    name: "Integration",

    mounted() {
      WorkatoApi.on('navigated', this.handleWorkatoNavigated);
    },

    beforeRouteUpdate(to, from, next) {
      console.log('INTERNAL URL CHANGED TO', to.fullPath);
      WorkatoApi.navigateTo(convertToWorkatoUrl(to.fullPath));
      next();
    },

    destroyed() {
      WorkatoApi.off('navigated', this.handleWorkatoNavigated);
    },

    data() {
      return {
        workatoLoaded: false,
        iframeSrc: getFullWorkatoUrl(convertToWorkatoUrl(this.$router.currentRoute.fullPath))
      }
    },

    methods: {
      handleWorkatoNavigated({url, replaced}) {
        console.log('WORKATO "navigated" event received:', url, replaced);

        const internalUrl = getInternalUrl(url);

        if (internalUrl === this.$router.currentRoute.fullPath) {
          console.log('IGNORING IT AS CURRENT URL IS THE SAME');
          return;
        }

        console.log('UPDATING INTERNAL URL FROM', this.$router.currentRoute.fullPath, 'TO', internalUrl, `(${replaced ? 'replacing' : 'pushing'})`);

        if (replaced) {
          this.$router.replace(internalUrl);
        } else {
          this.$router.push(internalUrl);
        }
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
