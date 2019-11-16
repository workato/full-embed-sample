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
        return Workato.constructEmbeddingUrl(this.href);
      },

      active() {
        const currentPath = this.$route.path;

        return (
          this.pathMatches(currentPath, this.normalizedActiveOn) &&
          !this.pathMatches(currentPath, this.normalizedInactiveOn)
        );
      },

      normalizedActiveOn() {
        return [
          ...this.parsePathPatterns(this.href),
          ...(this.activeOn ? this.parsePathPatterns(...this.activeOn) : [])
        ];
      },

      normalizedInactiveOn() {
        return this.inactiveOn ? this.parsePathPatterns(...this.inactiveOn) : [];
      }
    },

    methods: {
      parsePathPatterns(...patterns) {
        return patterns.map(pattern => {
          const exact = !pattern.endsWith('*');
          const workatoUrl = exact ? pattern : pattern.slice(0, -1);
          return {
            exact,
            path: Workato.constructEmbeddingUrl(workatoUrl)
          }
        });
      },

      pathMatches(path, rules) {
        return rules.some(rule =>
          rule.exact ? path === rule.path : path.startsWith(rule.path)
        );
      }
    }
  }
</script>
