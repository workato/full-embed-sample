<template>
  <div class="menu" :class="{menu_opened: opened}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Menu",

    props: {
      opened: Boolean,
      toggleElem: null
    },

    mounted() {
      document.addEventListener('click', this.handleDocumentClick, true);
    },

    destroyed() {
      document.removeEventListener('click', this.handleDocumentClick, true);
    },

    methods: {
      toggleOpened(flag = !this.opened) {
        this.$emit('update:opened', flag);
      },

      handleDocumentClick(event) {
        if (!this.opened) {
          return;
        }

        if (this.$el === event.target || this.$el.contains(event.target)) {
          return;
        }

        if (this.toggleElem && (this.toggleElem === event.target || this.toggleElem.contains(event.target))) {
          return;
        }

        this.toggleOpened(false);
      }
    }
  }
</script>

<style scoped lang="scss">
  .menu {
    position: absolute;
    visibility: hidden;
    transition: opacity .3s ease, visibility .3s ease;
    background: #fff;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
    padding: 35px;
    opacity: 0;
    top: 50px;
    left: 5px;

    &_opened {
      visibility: visible;
      opacity: 1;
      z-index: 100;
    }
  }
</style>
