<template>
  <div class="app">
    <div class="header">
      <div ref="mainMenuToggle"
        class="menu-btn"
        :class="{'menu-btn_active': mainMenuOpened}"
        @click="mainMenuOpened = !mainMenuOpened">
        <div class="menu-btn__line"></div>
        <div class="menu-btn__line"></div>
        <div class="menu-btn__line"></div>
      </div>
      <Menu class="main-menu" :opened.sync="mainMenuOpened" :toggleElem="$refs.mainMenuToggle">
        <div class="main-menu__items" @click="mainMenuOpened = false">
          <RouterLink class="main-menu__item main-menu__item_home" to="/" exact-active-class="main-menu__item_active">
            Home
          </RouterLink>
          <div class="main-menu__item main-menu__item_campaigns">
            Campaigns
          </div>
          <div class="main-menu__item main-menu__item_content">
            Content
          </div>
          <div class="main-menu__item main-menu__item_assets">
            Assets
          </div>
          <div class="main-menu__item main-menu__item_requests">
            Requests
          </div>
          <div class="main-menu__item main-menu__item_analytics">
            Analytics
          </div>
          <RouterLink class="main-menu__item main-menu__item_integration" to="/integration" active-class="main-menu__item_active">
            Integration
          </RouterLink>
        </div>
        <img class="main-menu__footer" src="./assets/menu_footer.png"/>
      </Menu>
      <router-link class="logo" to="/"></router-link>
      <Search/>
      <div class="user-menu">
        <img ref="userMenuToggle"
          class="user"
          src="./assets/header__user.png"
          @click="userMenuOpened = !userMenuOpened"/>
        <Menu :opened.sync="userMenuOpened" :toggleElem="$refs.userMenuToggle">
          <a class="user-menu__item"
            :href="`${workatoOrigin}/users/sign_out`"
            @click="userMenuOpened = false">Sign out</a>
        </Menu>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  import {config} from './config';
  import Search from '@/components/Search';
  import Menu from "@/components/Menu";

  export default {
    components: {
      Menu,
      Search
    },

    data() {
      return {
        workatoOrigin: config.workatoOrigin,
        mainMenuOpened: false,
        userMenuOpened: false
      }
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 300;
    src: local("Source Sans Pro Light"), local("SourceSansPro-Light"),
    url("/webfonts/Source_Sans_Pro/Light.woff2") format("woff2"),
    url("/webfonts/Source_Sans_Pro/Light.woff") format("woff");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),
    url("/webfonts/Source_Sans_Pro/Regular.woff2") format("woff2"),
    url("/webfonts/Source_Sans_Pro/Regular.woff") format("woff");

  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    src: local("Source Sans Pro SemiBold"), local("SourceSansPro-SemiBold"),
    url("/webfonts/Source_Sans_Pro/SemiBold.woff2") format("woff2"),
    url("/webfonts/Source_Sans_Pro/SemiBold.woff") format("woff");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 900;
    src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),
    url("/webfonts/Source_Sans_Pro/Bold.woff2") format("woff2"),
    url("/webfonts/Source_Sans_Pro/Bold.woff") format("woff");
  }
  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #f9f9f9;
  }

  body,
  button {
    font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  }

  body, html {
    height: 100%;
  }

  .app {
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .header {
    background: #33373e;
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 50px;
    flex: 0 0 auto;
  }

  .content {
    flex: 1 1 auto;
    display: flex;
    align-items: stretch;
  }

  .footer {
    flex: 0 0 auto;
    height: 50px;
    background: #33373e;
  }

  .menu-btn {
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

      .menu-btn_active & {
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

  .main-menu {
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

      &.main-menu__item_active,
      &:hover,
      &:active {
        color: #0085FF;
      }

      &_home {
        background-image: url("./assets/home_icon.svg");

        &:hover,
        &.main-menu__item_active {
          background-image: url("./assets/home_icon_active.svg");
        }
      }

      &_campaigns {
        background-image: url("./assets/campaigns_icon.svg");

        &:hover,
        &.main-menu__item_active {
          background-image: url("./assets/campaigns_icon_active.svg");
        }
      }

      &_content {
        background-image: url("./assets/content_icon.svg");

        &:hover,
        &.main-menu__item_active {
          background-image: url("./assets/content_icon_active.svg");
        }
      }

      &_assets {
        background-image: url("./assets/assets_icon.svg");

        &:hover,
        &.main-menu__item_active {
          background-image: url("./assets/assets_icon_active.svg");
        }
      }

      &_requests {
        background-image: url("./assets/requests_icon.svg");

        &:hover,
        &.main-menu__item_active {
          background-image: url("./assets/requests_icon_active.svg");
        }
      }

      &_analytics {
        background-image: url("./assets/analytics_icon.svg");

        &:hover,
        &.main-menu__item_active {
          background-image: url("./assets/analytics_icon_active.svg");
        }
      }

      &_integration {
        background-image: url("./assets/integration_icon.svg");

        &.main-menu__item_active {
          background-image: url("./assets/integration_icon_active.svg");
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

  .logo {
    margin-left: 30px;
    width: 80px;
    margin-right: auto;
    height: 29px;
    background: url("./assets/logo.png") center / contain no-repeat;
    flex: 0 0 auto;
  }

  .user {
    width: 196px;
    height: 40px;
    margin-left: 10px;
    cursor: pointer;
  }

  .user-menu {
    position: relative;

    .menu {
      right: 0;
      padding: 0;
      top: 44px;
    }

    &__item {
      display: block;
      padding: 10px;
      font-size: 15px;
      border-left: 4px solid transparent;

      &,
      &:link,
      &:visited,
      &:hover,
      &:active {
        color: #37434C;
        text-decoration: none;
      }

      &:hover {
        background: #DADFE3;
        border-left-color: #37434C;
      }
    }
  }

  .button {
    cursor: pointer;
    background: #34373E;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border: none;
    padding: 10px 12px;
    border-radius: 2px;

    &_link {
      &:link,
      &:visited,
      &:hover,
      &:active {
        text-decoration: none;
      }
    }

    &_block {
      display: block;
      width: 100%;
      text-align: left;
    }

    .fas {
      margin-right: 5px;
    }
  }
</style>
