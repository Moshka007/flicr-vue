<template>
  <div id='flickr-app'>
    <app-header/>
    <div class="content">
      <navbar/>
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { AppHeader, AppFooter, Navbar },

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #flickr-app {
    width: 100vw;
    height: 100vh;
  }

  .content {
    height: calc(100vh - 12vh);
    display: flex;
  }
</style>
