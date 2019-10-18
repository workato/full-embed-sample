<template>
  <iframe class="iframe" :src="iframeSrc"></iframe>
</template>

<script>
  import {convertToWorkatoUrl, getInternalUrl, getProxiedWorkatoUrl} from "@/utils";

  export default {
    name: "Integration",

    mounted() {
      WorkatoApi.on('navigated', this.handleWorkatoNavigated);
    },

    async beforeRouteEnter(to, from, next) {
      const token = await fetch('/workato-jwt').then(res => res.json());
      next(vm => vm.setToken(token));
    },

    beforeRouteUpdate(to, from, next) {
      WorkatoApi.navigateTo(convertToWorkatoUrl(to.fullPath));
      next();
    },

    destroyed() {
      WorkatoApi.off('navigated', this.handleWorkatoNavigated);
    },

    data() {
      return {
        iframeSrc: null
      }
    },

    methods: {
      setToken(token) {
        this.iframeSrc = getProxiedWorkatoUrl(convertToWorkatoUrl(this.$router.currentRoute.fullPath), token);
      },

      handleWorkatoNavigated({url, replaced}) {
        const internalUrl = getInternalUrl(url);

        if (internalUrl === this.$router.currentRoute.fullPath) {
          return;
        }

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
