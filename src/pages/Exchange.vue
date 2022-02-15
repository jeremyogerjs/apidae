<template>
  <div>
    <div class="breadcrumb">
      <p class="breadcrumb-item breadcrumb-item-active">
        <router-link to="/exchange">Exchange</router-link>
      </p>
      <p class="breadcrumb-item">
        <router-link to="/liquidity">Liquidity</router-link>
      </p>
    </div>

    <div class="card-wrapper">
      <swap-pool />
    </div>

  </div>
</template>

<script>
import SwapPool from "../components/SwapPool.vue";
export default {
  name: "Exchange",
  components: {
    SwapPool,
  }
};
</script>

<style scoped>
</style>