<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h4>Swap</h4>
        <font-awesome-icon class="settings" icon="cog" size="lg" />
        <font-awesome-icon class="settings" icon="history" size="lg" />
      </div>
      <div class="card-sub-header">
        <p>Trade tokens in an instant</p>
      </div>
      <div class="card-body">
        <div class="tokenA">
          <p @click="selectToken('')">
            <img class="icon-token" :src="getImgUrl(tokenA.img)" alt="" />
            {{ tokenA.value
            }}<font-awesome-icon icon="chevron-down" size="xs" />
          </p>
          <div class="wrapperToken">
            <div class="wrapperTokenInput">
              <div class="wrapperTokenTop">
                <div class="token">
                  <input
                    class="token-amount-input"
                    name="tokenA"
                    id="tokenA"
                    inputmode="decimal"
                    title="Token Amount"
                    autocomplete="off"
                    autocorrect="off"
                    type="text"
                    pattern="^[0-9]*[.,]?[0-9]*$"
                    placeholder="0.0"
                    minlength="1"
                    maxlength="79"
                    spellcheck="false"
                    value=""
                    v-model="tokenA.amountTokenA"
                  />
                </div>
              </div>
              <div class="wrapperTokenBottom"></div>
            </div>
          </div>
        </div>
        <div class="icon-swap">
          <button @click="switchToken">
            <font-awesome-icon
              class="default-icon"
              icon="fas fa-arrow-down"
              size="lg"
            />
            <font-awesome-icon
              class="hover-icon"
              icon="fas fa-exchange-alt"
              size="lg"
            />
          </button>
        </div>
        <div class="tokenB">
          <p @click="selectToken('b')">
            <img class="icon-token" :src="getImgUrl(tokenB.img)" alt="" />
            {{ tokenB.value
            }}<font-awesome-icon icon="chevron-down" size="xs" />
          </p>
          <div class="wrapperToken">
            <div class="wrapperTokenInput">
              <div class="wrapperTokenTop">
                <div class="token">
                  <input
                    class="token-amount-input"
                    name="tokenB"
                    id="tokenB"
                    inputmode="decimal"
                    title="Token Amount"
                    autocomplete="off"
                    autocorrect="off"
                    type="text"
                    pattern="^[0-9]*[.,]?[0-9]*$"
                    placeholder="0.0"
                    minlength="1"
                    maxlength="79"
                    spellcheck="false"
                    value=""
                    v-model="tokenB.amountTokenB"
                  />
                </div>
              </div>
              <div class="wrapperTokenBottom"></div>
            </div>
          </div>
        </div>
        <div class="slippage">
          <p>Slippage Tolerance</p>
          <p>0.5%</p>
        </div>
      </div>
      <div class="card-footer">
        <button class="unlock-btn">Connect Wallet</button>
      </div>
    </div>
    <SelectToken
      v-if="isActive"
      v-on:toggleActive="isActive = !isActive"
      v-on:getToken="getToken"
      :active="isActive"
      :selectedToken="token"
    />
  </div>
</template>

<script>
import SelectToken from "../components/SelectToken.vue";
export default {
  name: "SwapPool",
  components: {
    SelectToken,
  },
  data() {
    return {
      isActive: false,
      isSwitch: false,
      token: "",
      tokenA: {
        id: "a",
        value: "bnb",
        img: "bnb.png",
        amountTokenA: null,
      },
      tokenB: {
        id: "b",
        value: "usdt",
        img: "usdt.png",
        amountTokenB: null,
      },
    };
  },
  methods: {
    getImgUrl(img) {
      var images = require.context("../assets/logo/", false, /\.png$/);
      return images("./" + img);
    },
    selectToken(token) {
      this.isActive = !this.isActive;
      if (token == "b") {
        this.token = this.tokenB;
      } else {
        this.token = this.tokenA;
      }
    },
    getToken(token) {
      if (token.id == "a") {
        this.tokenA.value = token.value;
        this.tokenA.img = token.img;
      } else {
        this.tokenB.value = token.value;
        this.tokenB.img = token.img;
      }
    },
    switchToken() {
      if (!this.isSwitch) {
        let tempTokenValue = this.tokenA.value;
        let tempTokenimg = this.tokenA.img;
        let tempTokenAmount = this.tokenA.amountTokenA;
        this.tokenA.value = this.tokenB.value;
        this.tokenA.img = this.tokenB.img;
        this.tokenA.amountTokenA = this.tokenB.amountTokenB;

        this.tokenB.value = tempTokenValue;
        this.tokenB.img = tempTokenimg;
        this.tokenB.amountTokenB = tempTokenAmount;
      } else {
        let tempTokenValue = this.tokenA.value;
        let tempTokenimg = this.tokenA.img;
        let tempTokenAmount = this.tokenA.amountTokenA;
        this.tokenA.value = this.tokenB.value;
        this.tokenA.img = this.tokenB.img;
        this.tokenA.amountTokenA = this.tokenB.amountTokenB;

        this.tokenB.value = tempTokenValue;
        this.tokenB.img = tempTokenimg;
        this.tokenB.amountTokenB = tempTokenAmount;

      }
      this.isSwitch = !this.isSwitch;
    },
  },
};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}
.card-sub-header {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(231, 227, 235);
  padding-bottom: 10px;
}
.card-body {
  padding: 1.5em;
}
.icon-swap {
  display: flex;
  justify-content: center;
}
.icon-swap button {
  border-radius: 50%;
  width: 2.4em;
  height: 2.4em;
  border: none;
  color: var(--main-dark-bg-color);
  background-color: var(--main-bg-wrapper-color);
  margin: 1em 0 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: rgb(0 0 0 / 10%) 0px -2px 0px inset;
}
.hover-icon {
  display: none;
  transform: rotate(90deg);
}

.icon-swap button:hover {
  background-color: var(--main-dark-bg-color);
  color: var(--main-bg-wrapper-color);
}
.icon-swap button:hover .hover-icon {
  display: initial;
}
.icon-swap button:hover .default-icon {
  display: none;
}
.wrapperToken {
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  z-index: 1;
}
.wrapperTokenInput {
  border-radius: 16px;
  background-color: rgb(238, 234, 244);
  box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px;
}
.wrapperTokenTop {
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(40, 13, 95);
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0px;
}
.token {
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding: 0px;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.token-amount-input {
  color: rgb(40, 13, 95);
  width: 0px;
  position: relative;
  font-weight: 500;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: transparent;
  font-size: 16px;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  appearance: textfield;
}
.wrapperTokenBottom {
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
}
.tokenA p,
.tokenB p {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-bottom: 0.5em;
  transition: all 0.2s ease-in-out;
  width: fit-content;
  text-transform: uppercase;
}
.tokenA p:hover,
.tokenB p:hover {
  opacity: 0.6;
}
.tokenA p svg,
.tokenB p svg {
  margin-left: 0.5em;
}
.icon-token {
  width: 1.6em;
  object-fit: cover;
  margin-right: 0.5em;
}
.slippage {
  display: flex;
  justify-content: space-between;
  padding: 1em 1em 0 1em;
  font-weight: bold;
}

.slippage :first-child {
  font-size: 13px;
}
</style>