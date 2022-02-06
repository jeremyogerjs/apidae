import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../pages/Home';
import Exchange from '../pages/Exchange';
import Liquidity from '../pages/Liquidity';
import Farms from '../pages/Farms';
import Staking from '../pages/Staking';
import WhitePaper from '../pages/WhitePaper';


Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path:"/exchange",
        name:"Exchange",
        component: Exchange
    },
    {
        path:"/liquidity",
        name:"Liquidity",
        component: Liquidity
    },
    {
        path:"/farms",
        name:"Farms",
        component: Farms
    },
    {
        path:"/staking",
        name:"Staking",
        component: Staking
    },
    {
        path:"/white-paper",
        name:"WhitePaper",
        component: WhitePaper
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router