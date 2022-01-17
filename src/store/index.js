import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messages: []
    },
    actions: {
    },
    mutations: {
        newMessage(state, value) {
            let event = JSON.parse(value)
            if (event.type === 'connection') {
                state.messages = event.messages
            }
            if (event.type === 'message') {
                state.messages.push(event.message)
            }
            if (event.type === 'clear') {
                state.messages = []
            }
        }
    },
    getters: {
        getMessages(state) {
            return state.messages
        }
    },
    modules: {
    }
})
