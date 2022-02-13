<template>
    <div>
        <nav class="menu">
            <div class="menu-left">
                <div class="menu-mobile" @click="openMenu"><img class="logo" src="../assets/logo/apt.png" alt=""><font-awesome-icon icon="fas fa-bars" /></div>
                <ul class="mobile" :class="{active : isMobile}" v-click-outside="closeMenu">
                    <li class="home"> <router-link to="/"><img class="logo" src="../assets/logo/apt.png" alt="">Swapi finance</router-link> </li>
                    <li class="menu-link dropdown"> Trade 
                        <div class="sub-menu">
                            <ul>
                                <li> <router-link to="/exchange">Exchange</router-link> </li>
                                <li> <router-link to="/liquidity">Liquidity</router-link> </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-link"> <router-link to="/farms">Farms</router-link> </li>
                    <li class="menu-link"> <router-link to="/staking">Staking</router-link> </li>
                    <li class="menu-link dropdown"><font-awesome-icon icon="fas fa-ellipsis-h" />
                        <div class="sub-menu">
                            <ul>
                                <li> <router-link to="/white-paper">Roadmap</router-link> </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="menu-left">
                <ul>
                    <li class="home"><img class="logo" src="../assets/logo/apt.png" alt=""> <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">$1.007</a> </li>
                    <li class="dropdown"><font-awesome-icon class="settings" icon="globe" size="lg" />
                        <div class="sub-menu">
                            <ul>
                                <li>FR</li>
                                <li>ENG</li>
                            </ul>
                        </div>
                    </li>
                    <li @click="isActive = !isActive"><font-awesome-icon class="settings" icon="cog" size="lg" /></li>
                    <li><button class="menu-left-wallet">Connect Wallet</button></li>
                </ul>
            </div>
        </nav>
        <Settings v-if="isActive" v-on:toggleActive="isActive = !isActive" :active="isActive" />
    </div>
</template>

<script>
import Vue from "vue";
import Settings from "./Settings.vue";
Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});
export default {
    name:"Head",
    components: {
        Settings,
    },
    data() {
        return {
            isMobile: false,
            isActive:false,
        }
    },
    methods: {
        openMenu() {
            this.isMobile = !this.isMobile;
        },
        closeMenu(e) {
            console.log(e.target.className);
            if(e.target.className == "logo" || e.target.className?.animVal == "svg-inline--fa fa-bars" || e.target.className?.animVal == "") {
                return;
            } else {
                this.isMobile = false;
            }
        }
    }   
}
</script>

<style scoped>
@import "../assets/styles/components/header.css";
</style>