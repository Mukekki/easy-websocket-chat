<template>
    <div>
        <send></send>
        <div class="container">
            <div class="item" v-for="(item, index) of messages" :key="index">
                <div class="name">{{item.name}}</div>
                <div class="message">{{item.message}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Send from './snippets/Send.vue'
export default {
    name: 'home',
    components: {
        'send': Send
    },
    computed: {
        messages() {
            return this.$store.getters.getMessages
        }
    },
}
</script>

<style lang="less">
    .container {
        display: flex;
        flex-direction: column-reverse;
        flex-grow: 0;
        background-color: rgb(185, 145, 137);
        padding: 10px;
        margin: 15px;
        border-radius: 10px;
        .item {
            display: flex;
            flex-direction: column;
            column-gap: 3px;
            color: rgb(197, 118, 72);
            background-color: white;
            animation-name: item;
            animation-duration: 1s;
            padding: 10px;
            border-radius: 10px;
            margin-bottom: 10px;

            > .name {
                opacity: 0.5;
                font-weight: 700;
                font-size: 14px;
            }

            > .message {
                font-weight: 400;
                font-size: 18px;
            }

            &:nth-child(2n) {
                background-color: rgb(145, 113, 107);
                padding: 10px;
                border-radius: 10px;

                > .name {
                    color: white;
                }

                > .message {
                    color: white;
                }
            }
        }
    }

    @keyframes item {
        0% {
            transform: translateX(-100px);
            opacity: 0;
        }
        100% {
            transform: translateX(0px);
            opacity: 1;
        }
    }
</style>