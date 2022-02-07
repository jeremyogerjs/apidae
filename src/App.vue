<template>
  <div id="app">
    <Head />
    <div class="container">
      <router-view></router-view>
    </div>
    <Foot />
  </div>
</template>

<script>
import Head from "./components/Header.vue";
import Foot from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Head,
    Foot,
  },
};
</script>

<style>
@import "./assets/styles/pages/reset.css";
@import "./assets/styles/pages/common.css";
</style>
