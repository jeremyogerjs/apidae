<template>
  <div>
    <div class="breadcrumb">
      <p class="breadcrumb-item"><router-link to="/farms">Farm</router-link></p>
      <p class="breadcrumb-item breadcrumb-item-active">
        <router-link to="/staking">Staking</router-link>
      </p>
    </div>
    <div class="hero">
      <div class="hero-content">
        <h3 class="hero-title">Staking</h3>
        <p class="hero-body">Just stake some tokens to earn.</p>
        <p class="hero-body">Hight APR,low risk.</p>
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
  name: "Staking",
  data() {
    return {
      pool: [{ paire: "", apr: "" }, {}, {}],
    };
  },
  components: {
    CardPool,
  },
};
</script>

<style scoped>
</style>