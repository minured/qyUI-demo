<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <van-tabbar>
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">
  #app {
    background-color: #f5f5f5;
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
