<template>
    <div class="head-view">
        <div class="head-view-top">
            <Logo :titleName="config.title"></Logo>
            <TopNav></TopNav>
            <SearchBox></SearchBox>
            <PersonalCenter :initStore="initStore"></PersonalCenter>
        </div>
        <div class="head-view-bottom">
            <TopSubNav></TopSubNav>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { InitStore } from '@/store/initStore';
import TopNav from './components/TopNav.vue';
import TopSubNav from './components/TopSubNav.vue';
import PersonalCenter from './components/PersonalCenter.vue';
import SearchBox from './components/SearchBox.vue';

const initStore = InitStore();

const config = computed(() => {
    return initStore.config;
});
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

        .search-input {
            margin-right: pxToRem(30);
        }
    }

    &-bottom {
        @include whrem(100%, 52);
        @include flexCenter;
    }
}
</style>
