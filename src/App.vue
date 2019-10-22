<template>
  <div class="app">
    <div class="header">
      <div class="menu-btn" :class="{'menu-btn_active': menuOpened}" @click="toggleMenu()">
        <div class="menu-btn__line"></div>
        <div class="menu-btn__line"></div>
        <div class="menu-btn__line"></div>
      </div>
      <div class="menu" :class="{menu_opened: menuOpened}">
        <div class="menu__items" @click="toggleMenu(false)">
          <RouterLink class="menu__item menu__item_home" to="/" exact-active-class="menu__item_active">
            Home
          </RouterLink>
          <div class="menu__item menu__item_campaigns">
            Campaigns
          </div>
          <div class="menu__item menu__item_content">
            Content
          </div>
          <div class="menu__item menu__item_assets">
            Assets
          </div>
          <div class="menu__item menu__item_requests">
            Requests
          </div>
          <div class="menu__item menu__item_analytics">
            Analytics
          </div>
          <RouterLink class="menu__item menu__item_integration" to="/integration" exact-active-class="menu__item_active">
            Integration
          </RouterLink>
        </div>
        <img class="menu__footer" src="./assets/menu_footer.png"/>
      </div>
      <div class="logo"></div>
      <Search/>
      <img class="user" src="./assets/header__user.png"/>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  import Search from '@/components/Search';

  export default {
    components: {
      Search
    },

    data() {
      return {
        menuOpened: false
      }
    },

    methods: {
      toggleMenu(flag = !this.menuOpened) {
        this.menuOpened = flag;
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
    padding-right: calc(100% - 1414px);
    flex: 0 0 auto;
  }

  .content {
    flex: 1 1 auto;
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

  .menu {
    position: absolute;
    visibility: hidden;
    transition: opacity .3s ease, visibility .3s ease;
    background: #fff;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
    padding: 35px;
    opacity: 0;
    top: 55px;
    left: 5px;

    &_opened {
      visibility: visible;
      opacity: 1;
      z-index: 100;
    }

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

      &.menu__item_active,
      &:hover,
      &:active {
        color: #0085FF;
      }

      &_home {
        background-image: url("./assets/home_icon.png");

        &.menu__item_active {
          background-image: url("./assets/home_icon_active.png");
        }
      }

      &_campaigns {
        background-image: url("./assets/campaigns_icon.png");
      }

      &_content {
        background-image: url("./assets/content_icon.png");
      }

      &_assets {
        background-image: url("./assets/assets_icon.png");
      }

      &_requests {
        background-image: url("./assets/requests_icon.png");
      }

      &_analytics {
        background-image: url("./assets/analytics_icon.png");
      }

      &_integration {
        background-image: url("./assets/integration_icon.png");

        &.menu__item_active {
          background-image: url("./assets/integration_icon_active.png");
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
  }

  .user {
    width: 196px;
    height: 40px;
    margin-left: 10px;
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
