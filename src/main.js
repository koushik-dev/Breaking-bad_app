import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Cards from './components/Cards'
import Character from "./components/Character";
import Dashboard from "./Dashboard";

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: Dashboard
    },
    {
      path: '/characters', component: Cards
    },
    {
      path: '/character/:id', component: Character, props: true
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
