<template>
  <div>
    <div class="breadcrumb">
      <p class="breadcrumb-item">
        <router-link to="/exchange">Exchange</router-link>
      </p>
      <p class="breadcrumb-item breadcrumb-item-active">
        <router-link to="/liquidity">Liquidity</router-link>
      </p>
    </div>

    <div class="card-wrapper">
      <div class="card">
        <div class="card-header">
          <div>
            <p class="card-title">Your liquidity</p>
            <p class="card-subtitle">Remove liquidity to receive tokens back</p>
          </div>
          <div>
            <font-awesome-icon
              class="icon"
              icon="cog"
              size="lg"
            ></font-awesome-icon>
            <font-awesome-icon
              class="icon"
              icon="history"
              size="lg"
            ></font-awesome-icon>
          </div>
        </div>
        <div class="card-body">connect to a wallet to view your liquidity</div>
        <div class="card-footer">
          <button class="btn">
            <font-awesome-icon
              class="icon-btn"
              icon="plus"
              size="xs"
            ></font-awesome-icon>
            Add liquidity
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Liquidity",
};
</script>

<style scoped>
.card {
  width: 27em;
  border: none;
  border-radius: 24px;
  -webkit-box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.05);
}
.card-title {
  font-weight: 600;
  font-size: 1.4em;
}
.card-subtitle {
  color: grey;
}
.card-body {
  background-color: grey;
  color: var(--main-bg-color);
  width: 100%;
  padding: 1.4em 0;
  text-align: center;
}
.btn {
  width: 100%;
  background-color: var(--main-dark-bg-color);
  color: white;
  border-radius: 16px;
  border: none;
  padding: 1em 1.2em;
  height: fit-content;
  font-size: medium;
  cursor: pointer;
  -webkit-box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.05);
  transition: all .2s ease-in;
}
.icon-btn {
  margin-right: 0.5em;
}
.btn:hover,
.icon:hover {
  background-color: var(--main-bg-wrapper-color);
  color: var(--main-bg-dark-color);
  cursor: pointer;
}
.icon {
  margin-left: 0.5em;
}
</style>