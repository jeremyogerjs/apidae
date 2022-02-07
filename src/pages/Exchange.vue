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
  </div>
</template>

<script>
export default {
  name: "Exchange",
};
</script>

<style scoped>
</style>