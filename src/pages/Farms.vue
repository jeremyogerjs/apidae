<template>
  <div>
    <div class="breadcrumb">
      <p class="breadcrumb-item breadcrumb-item-active"> <router-link to="/farms">Farms</router-link></p>
      <p class="breadcrumb-item"> <router-link to="/staking">Staking</router-link></p>
    </div>
    <div class="hero">
        <div class="hero-content">
            <h3 class="hero-title">Farms</h3>
            <p class="hero-body">Stake LP tokens to earn</p>
        </div>
    </div>
    <div class="card-wrapper">
      <CardPool />
      <CardPool />
      <CardPool />
    </div>
  </div>
</template>

<script>
import CardPool from "../components/CardPool.vue";
export default {
  name: "Farms",
  components: {
    CardPool,
  },
};
</script>

<style scoped>

</style>