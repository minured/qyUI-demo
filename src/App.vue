<template>
    <div id="app">
        <router-view v-if="$store.state.system"/>
        <img v-else class="cover" :src="'./static/unpackage/res/splashscreen/1080x1882.png'"/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            getMain() {
                this.$http.get('system/client/main').then((data) => {
                    this.$store.commit('setSystem', data.system)
                    this.$store.commit('setUser', data.user)
                })
            }
        },
        mounted() {
            this.getMain()
        },
    }
</script>

<style lang="scss">
    body {
        background-color: #f5f5f5;
        -webkit-font-smoothing: antialiased;
    }

    #app {
        font-size: 14px;
    }

    .group {
        margin-bottom: .2rem;
    }

    .clear {
        clear: both
    }

    .content {
        background-color: #ffffff;
    }

    .padding {
        padding: .2rem;
        background-color: #ffffff;
    }

    #app .cover {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 99999;
    }
</style>
