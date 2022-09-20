<template>
    <div :class="['top-nav-item', active && 'active']" @click="navItemClick">
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

const navItemClick = (event: MouseEvent) => {
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
    background: rgba(var(--theme-background-color), 1);
    font-size: pxToRem(18);

    a {
        color: rgba(var(--font-base-color), 1);
    }

    &.active {
        @include navSelected;
    }
    &.active:hover {
        a {
            color: rgba(var(--theme-background-color), 1);
        }
    }

    &:hover {
        a {
            color: rgba(var(--theme-color), 1);
        }
    }
}
</style>
