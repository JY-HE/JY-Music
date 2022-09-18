<template>
    <div class="top-nav">
        <TopSubNavItem
            v-for="(item, index) in topSubNavList"
            :key="item.itemName"
            :itemName="item.itemName"
            :itemLink="item.itemLink"
            :active="currentIndex === index"
            @click="itemClick(index)"
        ></TopSubNavItem>
    </div>
</template>

<script lang="ts" setup>
let currentIndex = ref(-1);

const topSubNavList = computed(() => {
    return [
        { itemName: '首页', itemLink: '/index' },
        { itemName: '歌手', itemLink: '/singerList' },
        { itemName: '新碟', itemLink: '/album' },
        { itemName: '排行榜', itemLink: '/topList' },
        { itemName: '分类歌单', itemLink: '/category' },
        { itemName: '电台', itemLink: '/radio' },
        { itemName: 'MV', itemLink: '/mvList' },
        { itemName: '数字专辑', itemLink: '/albumMall' },
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
