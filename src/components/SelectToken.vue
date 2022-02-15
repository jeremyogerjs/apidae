<template>
  <div style="positon: relative">
    <div @click="closeModal" class="modal-backdrop"></div>
    <div class="modal-card">
      <div class="modal-header">
        <p>Select Token</p>
        <p @click="closeModal" class="close">
          <font-awesome-icon icon="fas fa-times" size="lg" />
        </p>
      </div>
      <div class="modal-card-body">
          <div class="form-group">
            <input
              type="search"
              name="tokenName"
              id="tokenName"
              placeholder="Search name or paste address"
              v-model="searchToken"
            />
            <ul>
              <li v-for="(token, index) in searchingToken" :key="index" @click="getToken(token)">
                <img class="icon-token" :src="getImgUrl(token.img)" alt="" />
                <div>
                  <p>{{ token.title }}</p>
                  <p>{{ token.value }}</p>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectToken",
  props: ["active","selectedToken"],
  data() {
    return {
      isActive: this.active,
      searchToken:"",
      token:this.selectedToken,
      tokens: [
        {
          title: "BNB",
          value: "bnb",
          img: "bnb.png",
        },
        {
          title: "cake",
          value: "cake",
          img: "cake.png",
        },
        {
          title: "dai",
          value: "dai",
          img: "DAI.png",
        },
      ],
    };
  },
  methods: {
    closeModal() {
      this.$emit("toggleActive");
    },
    getImgUrl(img) {
      var images = require.context("../assets/logo/", false, /\.png$/);
      return images("./" + img);
    },
    getToken(token) {
        this.token.value = token.value;
        this.token.img = token.img;
        this.$emit('getToken',this.token);
        this.$emit("toggleActive");
    }
  },
  computed:{
      searchingToken() {
          return this.tokens.filter(token => {
              return token.value.includes(this.searchToken.toLowerCase())
          })
      }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: absolute;
  opacity: 0.7;
  background-color: var(--main-dark-bg-color);
  height: 100vh;
  width: 100%;
  z-index: 998;
  top: 0;
  left: 0;
}
.modal-card {
  position: absolute;
  width: 22em;
  margin: 11em auto;
  left: calc(50% - 11em);
  z-index: 9999;
  background-color: white;
  border-radius: 16px;
  opacity: 1;
  top: 0;
}
.modal-header {
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  background-color: #edeef3;
  opacity: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: #333;
  padding: 1em;
}
.close {
  cursor: pointer;
}
.modal-body {
  padding: 1em;
}
.title-from-group {
  color: var(--main-bg-color);
  padding: 0.5em 0 0 1em;
}
.icon-token {
  width: 1.6em;
  object-fit: cover;
  margin-right: 0.5em;
}

.form-group {
  display: flex;
  flex-direction: column;
  padding: .1em 0;
}
.form-group input {
    padding: 10px;
    border-radius: 16px;
    border: none;
    background-color: rgb(238, 234, 244);
    color: black;
    width: 80%;
    margin: 1em auto;
    box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px;
}
.form-group ul {
  list-style: none;
}
.form-group ul li {
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  padding: .5em;
}
.form-group ul li:hover {
  background-color: rgb(250, 249, 250);
}
.form-group ul :last-child {
    border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
}
.form-group ul li p {
  margin-block-start: 0;
  margin-block-end: 0;
}
.form-group ul li div :first-child {
  font-weight: bold;
  text-transform: uppercase;
}
.form-group ul li div :last-child {
  opacity: 0.5;
  font-size: 12px;
}
</style>