<template>
    <div class="top-nav">
        <TopNavItem
            v-for="(item, index) in topNavList"
            :key="item"
            :itemName="item"
            :active="currentIndex === index"
            @click="itemClick(index)"
        ></TopNavItem>
    </div>
</template>

<script lang="ts" setup>
let currentIndex = ref(0);

const topNavList = computed(() => {
    return ['音乐馆', '我的音乐', '客户端', '开放平台', 'VIP'];
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
