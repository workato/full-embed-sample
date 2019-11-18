<template>
  <div
    class="MainMenuToggle"
    :class="{'MainMenuToggle_active': opened}"
    @click="$emit('update:opened', !opened)">
    <div class="MainMenuToggle__line"></div>
    <div class="MainMenuToggle__line"></div>
    <div class="MainMenuToggle__line"></div>
  </div>
</template>

<script>
  export default {
    props: {
      opened: Boolean
    }
  }
</script>

<style lang="scss">
  .MainMenuToggle {
    background: #131313;
    position: relative;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    flex: 0 0 auto;

    &__line {
      background: #fff;
      height: 3px;
      border-radius: 2px;
      width: 20px;
      transition: transform .3s ease, opacity .3s ease;

      & + & {
        margin-top: 3px;
      }

      .MainMenuToggle_active & {
        &:first-child {
          transform: translateY(6px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:last-child {
          transform: translateY(-6px) rotate(-45deg);
        }
      }
    }
  }
</style>
