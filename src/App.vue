<template>
    <div id="app">
        <router-view v-if="$store.state.system"/>
        <img v-else class="cover" :src="'./static/unpackage/res/splashscreen/1080x1882.png'"/>
        <qy-share :store="$store"/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            async getMain() {
                let data = await this.$http.get('app/main/info', {params: {host: window.location.host}})
                if (data && data.id) {
                    this.$http.interceptors.request.use(config => {
                        config.headers['App-Id'] = data.id
                        return config
                    })
                }
                this.$http.get('system/client/main').then((data) => {
                    this.$store.commit('setConfig', data.config)
                    this.$store.commit('setSystem', data.system)
                    this.$store.commit('setUser', data.user)
                    this.$store.commit('setMenu', {bottom: data.menu_bottom})
                }).catch((e) => {
                    this.qy.requestStatusHandle(e)
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
        line-height: 22px;
    }

    .group {
        margin-bottom: .2rem;
    }

    .clear {
        clear: both
    }

    .contents {
        background-color: #ffffff;
    }

    .bottom_nav .placeholder {
        height: 1.5rem;
    }

    .title {
        font-size: 16px;
        padding: 10px 0;
    }

    .description {
        font-size: 13px;
        color: rgb(144, 144, 144);
        line-height: 20px;
        max-height: 60px;
        letter-spacing: 1px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }

    .link-title {
        color: rgb(180, 180, 180);
    }

    .padding {
        padding: .4rem;
    }

    .qy-list .padding {
        padding-top: 0;
    }

    #app .cover {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 99999;
    }

    .article-list-item .pay {
        color: rgb(235, 42, 42);
        text-align: center;
        background-color: rgb(254, 195, 183);
        margin-top: 0.3rem;
        border-radius: 0.2rem;
        line-height: .9rem;
    }

    .article-list-item .pay .lock img {
        width: 15px;
        height: 11px;
    }

    .article-list-item .detail {
        color: #b4b4b4;
        line-height: 0.34rem;
        padding-top: 0.15rem;
        padding-bottom: 0.15rem;
        font-size: 12px;
        letter-spacing: 0;
        overflow: hidden;
    }

    .article-list-item .detail span {
        padding-right: .2rem;
    }
    .article-list-item .detail .share {
        font-size: 14px;
    }
</style>
