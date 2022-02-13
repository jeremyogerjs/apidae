<template>
  <div style="positon: relative">
    <div @click="closeModal" class="modal-backdrop"></div>
    <div class="modal-card">
      <div class="modal-header">
        <p>Parametre</p>
        <p @click="closeModal" class="close">
          <font-awesome-icon icon="fas fa-times" size="lg" />
        </p>
      </div>
      <div class="modal-card-body">
        <div>
          <p class="title-from-group">Global</p>
          <div class="form-group">
            <p>Dark mode</p>
            <label class="toggle" for="myToggle">
              <input
                class="toggle__input"
                name=""
                type="checkbox"
                id="myToggle"
              />
              <div class="toggle__fill"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  props: ["active"],
  data() {
    return {
      isActive: this.active,
    };
  },
  methods: {
    closeModal() {
      this.$emit("toggleActive");
    },
  },
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
.form-group {
  display: flex;
  justify-content: space-between;
  padding: 1em;
}

/* Siwtch input */
.toggle {
  --width: 40px;
  --height: calc(var(--width) / 2);
  --border-radius: calc(var(--height) / 2);

  display: inline-block;
  cursor: pointer;
}
.toggle__input {
  display: none;
}

.toggle__fill {
  position: relative;
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  background: #dddddd;
  padding-left: .2em;
  transition: background 0.2s;
}
.toggle__fill::before {
  content: "";
  position: absolute;
  top: 0;
  right: .15em;
  padding-right: .2em;
  height: var(--height);
  width: var(--height);
  background-image: url("../assets/logo/sun-solid.svg");
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: right;
  transition: transform 0.2s;
}
.toggle__fill::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: var(--height);
  width: var(--height);
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius);
  transition: transform 0.2s;
}

.toggle__input:checked ~ .toggle__fill {
  background-image: url("../assets/logo/moon-solid.png");
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: left;
  background-origin: content-box;
}

.toggle__input:checked ~ .toggle__fill::after {
  transform: translateX(var(--height));
}
</style>