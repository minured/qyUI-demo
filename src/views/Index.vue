<template>
    <qy-page>
        <van-nav-bar :title="$store.state.system.name+'系统演示'"
                     left-arrow
                     @click-left="$router.go(-1)"
        />
        <van-cell title="首页" is-link to="/payIndex"/>
        <van-cell title="商城" is-link to="/shopIndex"/>
    </qy-page>
</template>

<script>
    export default {
        name: 'home',
    }
</script>
