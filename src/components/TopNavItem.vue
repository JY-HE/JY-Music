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
    background: #fff;
    font-size: pxToRem(18);

    a {
        color: #000;
    }

    &.active {
        background: #31c27c;
        a {
            color: #fff;
        }
    }
    &.active:hover {
        a {
            color: #fff;
        }
    }

    &:hover {
        a {
            color: #31c27c;
        }
    }
}
</style>
