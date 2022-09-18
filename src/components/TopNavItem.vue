<template>
    <div :class="['top-nav-item', active && 'active']" @click="navItemClick">
        {{ itemName }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    itemName: {
        type: String,
        default: '',
    },
    active: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['click']);

const navItemClick = (event: EventTarget) => {
    emit('click', event);
};
</script>

<style lang="scss">
.top-nav-item {
    height: 100%;
    padding: 0 pxToRem(20);
    text-align: center;
    line-height: pxToRem(90);
    @include cursor;
    background: #fff;
    font-size: pxToRem(18);
    color: #000;

    &:hover {
        color: #31c27c;
    }

    &.active {
        color: #fff;
        background: #31c27c;
    }
}
</style>
