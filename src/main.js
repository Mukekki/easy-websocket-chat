import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let socket = new WebSocket("ws://localhost:3000");
socket.binaryType = "arraybuffer";

let helpers = {
    install: () => {
        Vue.prototype.$websocket = socket
    }
}

Vue.use(helpers)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
