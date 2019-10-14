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
      async getMain() {
        let res = await this.$http.get('system/client/main')
        this.$store.commit('setSystem', res.data.system)
        this.$store.commit('setUser', res.data.user)
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
