<template>
    <div class="music-logo">
        <img src="../assets/imgs/logo.png" alt="" />
        <h1>{{ titleName }}</h1>
    </div>
</template>

<script setup lang="ts">
defineProps({
    titleName: { type: String, default: '' },
});
</script>

<style lang="scss">
.music-logo {
    height: pxToRem(64);
    @include flexCenter;
    @include cursor;

    img {
        @include whrem(64);
        margin-right: pxToRem(12);
    }

    h1 {
        @include logoStyle;
    }
}
</style>
