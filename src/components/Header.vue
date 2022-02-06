<template>
    <div>
        <nav class="menu">
            <div class="menu-left">
                <ul>
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
                    <li class="menu-link dropdown">More
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
                    <li class="home"><img class="logo" src="../assets/logo/apt.png" alt=""> $1.007</li>
                    <li class="menu-link dropdown">Langue
                        <div class="sub-menu">
                            <ul>
                                <li>FR</li>
                                <li>ENG</li>
                            </ul>
                        </div>
                    </li>
                    <li>Setting</li>
                    <li><button class="menu-left-wallet">Connect Wallet</button></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:"Head",   
}
</script>

<style scoped>
@import "../assets/styles/components/header.css";
</style>