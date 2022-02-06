<template>
  <div id="app">
    <Head />
    <router-view></router-view>
    <Foot />
  </div>
</template>

<script>
import Head from './components/Header.vue';
import Foot from "./components/Footer.vue";
export default {
  name: 'App',
  components: {
    Head,
    Foot
  }
}
</script>

<style>
@import "./assets/styles/pages/reset.css";
</style>
