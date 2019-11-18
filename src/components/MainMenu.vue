<template>
  <div class="MainMenu">
    <MainMenuToggle ref="toggleButton" :opened.sync="opened"/>
    <Menu :opened.sync="opened" :toggleButton="$refs.toggleButton">
      <div class="MainMenu__items" @click="opened = false">
        <RouterLink class="MainMenu__item MainMenu__item_home" to="/" exact-active-class="MainMenu__item_active">
          Home
        </RouterLink>
        <div class="MainMenu__item MainMenu__item_campaigns">
          Campaigns
        </div>
        <div class="MainMenu__item MainMenu__item_content">
          Content
        </div>
        <div class="MainMenu__item MainMenu__item_assets">
          Assets
        </div>
        <div class="MainMenu__item MainMenu__item_requests">
          Requests
        </div>
        <div class="MainMenu__item MainMenu__item_analytics">
          Analytics
        </div>
        <RouterLink class="MainMenu__item MainMenu__item_integration" to="/integration"
          active-class="MainMenu__item_active">
          Integration
        </RouterLink>
      </div>
      <img class="MainMenu__footer" src="../assets/menu_footer.png"/>
    </Menu>
  </div>
</template>

<script>
  import MainMenuToggle from "@/components/MainMenuToggle"
  import Menu from "@/components/Menu"

  export default {
    name: 'MainMenu',
    components: { MainMenuToggle, Menu },
    data() {
      return {
        opened: false,
      }
    }
  }
</script>

<style lang="scss">
  .MainMenu {
    &__items {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 25px;
    }

    &__item {
      min-height: 40px;
      padding: 58px 5px 5px;
      cursor: pointer;
      background-repeat: no-repeat;
      background-position: center 5px;
      background-size: auto 45px;
      text-align: center;
      font-size: 13px;

      &,
      &:link,
      &:visited,
      &:hover,
      &:active {
        text-decoration: none;
      }

      &,
      &:link,
      &:visited {
        color: #50636d;
      }

      &_home {
        background-image: url("../assets/home_icon.svg");

        &:hover,
        &.MainMenu__item_active {
          background-image: url("../assets/home_icon_active.svg");
        }
      }

      &_campaigns {
        background-image: url("../assets/campaigns_icon.svg");

        &:hover,
        &.MainMenu__item_active {
          background-image: url("../assets/campaigns_icon_active.svg");
        }
      }

      &_content {
        background-image: url("../assets/content_icon.svg");

        &:hover,
        &.MainMenu__item_active {
          background-image: url("../assets/content_icon_active.svg");
        }
      }

      &_assets {
        background-image: url("../assets/assets_icon.svg");

        &:hover,
        &.MainMenu__item_active {
          background-image: url("../assets/assets_icon_active.svg");
        }
      }

      &_requests {
        background-image: url("../assets/requests_icon.svg");

        &:hover,
        &.MainMenu__item_active {
          background-image: url("../assets/requests_icon_active.svg");
        }
      }

      &_analytics {
        background-image: url("../assets/analytics_icon.svg");

        &:hover,
        &.MainMenu__item_active {
          background-image: url("../assets/analytics_icon_active.svg");
        }
      }

      &_integration {
        background-image: url("../assets/integration_icon.svg");

        &:hover,
        &.MainMenu__item_active {
          background-image: url("../assets/integration_icon_active.svg");
        }
      }
    }

    &__footer {
      margin: 35px 0 5px 10px;
      display: block;
      width: 209px;
      height: 18px;
      cursor: pointer;
    }
  }
</style>
