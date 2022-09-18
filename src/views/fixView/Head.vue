<template>
    <div class="head-view">
        <div class="head-view-top">
            <Logo></Logo>
            <TopNav></TopNav>
        </div>
        <div class="head-view-bottom">
            <TopSubNav></TopSubNav>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TopNav from './components/TopNav.vue';
import TopSubNav from './components/TopSubNav.vue';
</script>
<style lang="scss">
.head-view {
    @include whrem(100%, 142);
    @include flexCenter(center, center, true);

    &-top {
        @include whrem(100%, 90);
        @include flexCenter;

        .top-nav {
            margin: 0 pxToRem(30);
        }
    }

    &-bottom {
        @include whrem(100%, 52);
        @include flexCenter;
    }
}
</style>
