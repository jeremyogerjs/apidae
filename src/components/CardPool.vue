<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-header">
        <img src="../assets/logo/apt.png" alt="" />
        <div class="card-header-title">
          <p>Titre paire</p>
          <p class="fees">10X</p>
        </div>
      </div>
      <div class="card-body">
        <ul>
          <li>
            <span class="custom-li">APR: </span>
            <span>4000%</span>
          </li>
          <li>
            <span>EARN: </span>
            <span>APT</span>
          </li>
        </ul>
        <div class="card-body-harvest">
          <div>
            <p>APT earned</p>
            <p>0</p>
          </div>
          <button>Harvest</button>
        </div>
        <p>Titre paire lp staked</p>
        <button class="unlock-btn">Unlock Wallet</button>
      </div>
      <div class="hr"></div>
      <div class="card-footer">
        <p class="show-more">Details</p>
        <div>
          <ul>
            <li>
              <span>Deposit: </span>
              <span>Titre ede la paire</span>
            </li>
            <li>
              <span>Total Liquidity: </span>
              <span>$0</span>
            </li>
          </ul>
          <p>View on BscScan</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPool",
};
</script>

<style scoped>
@import "../assets/styles/components/cardPool.css";
</style>