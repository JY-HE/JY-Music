<template>
    <div :class="['top-subnav-item', active && 'active']" @click="subnavItemClick">
        <router-link :to="itemLink">
            {{ itemName }}
        </router-link>
    </div>
</template>

<script setup lang="ts">
defineProps({
    itemName: { type: String, default: '' },
    itemLink: { type: String, default: '' },
    active: { type: Boolean, default: false },
});
const emit = defineEmits(['click']);

const subnavItemClick = (event: MouseEvent) => {
    emit('click', event);
};
</script>

<style lang="scss">
.top-subnav-item {
    height: 100%;
    padding: 0 pxToRem(20);
    text-align: center;
    line-height: pxToRem(52);
    @include cursor;
    background: var(--theme-background-color);
    font-size: pxToRem(16);

    a {
        color: var(--font-base-color);
    }

    &.active,
    &:hover {
        @include subNavSelected;
    }
}
</style>
