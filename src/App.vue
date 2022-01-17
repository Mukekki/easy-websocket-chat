<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app',
    mounted() {
        // this.$websocket.addEventListener("open", () => {
        //     console.log('CONNECTED')
        // })
        this.$websocket.onopen = () => {
            console.log('CONNECTED')
        }

        this.$websocket.onclosed = () => {
            console.log('DISCONNECTED')
        }
        
        this.$websocket.onmessage = (event) => {
            this.$store.commit('newMessage', event.data)
        }
    }
}
</script>

<style lang="less">
</style>
