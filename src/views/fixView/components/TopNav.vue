<template>
    <div class="top-nav">
        <TopNavItem
            v-for="(item, index) in topNavList"
            :key="item.itemName"
            :itemName="item.itemName"
            :itemLink="item.itemLink"
            :active="currentIndex === index"
            @click="itemClick(index)"
        ></TopNavItem>
    </div>
</template>

<script lang="ts" setup>
let currentIndex = ref(0);

const topNavList = computed(() => {
    return [
        { itemName: '音乐馆', itemLink: '/index' },
        { itemName: '我的音乐', itemLink: '/likeSongs' },
        { itemName: '客户端', itemLink: '' },
        { itemName: '开放平台', itemLink: '' },
        { itemName: 'VIP', itemLink: '' },
    ];
});

const itemClick = (index: number) => {
    currentIndex.value = index;
};
</script>

<style lang="scss">
.top-nav {
    height: 100%;
    @include flexCenter;
}
</style>
