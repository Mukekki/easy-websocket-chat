<template>
    <form action="submit" @submit="submit($event)" class="input">
        <input v-model="value" type="text">
    </form>
</template>

<script>
export default {
    name: 'send',
    data() {
        return {
            value: ''
        }
    },
    methods: {
        submit(event) {
            event.preventDefault()
            this.$websocket.send(
                JSON.stringify({
                    name: navigator.vendor,
                    message: this.value
                })
            )
            this.value = ''
        }
    }
}
</script>

<style lang="less">
    .input {
        margin: 15px;
        border: 1px solid tomato;
        border-radius: 10px;

        > input {
            outline: none;
            border: none;
            width: 100%;
            background: none;
            padding: 10px;
        }
    }
</style>