<template>
    <div class="personal-center-view">
        <div class="label">个人中心</div>
        <div class="select__box">
            <ui>
                <li class="color-block">
                    <span>主题色</span>
                    <el-color-picker v-model="state.color" @change="colorPicker" />
                </li>
            </ui>
        </div>
    </div>
</template>

<script setup lang="ts">
import theme from '@/utils/theme';
import { InitStore } from '@/store/initStore';

const initStore = InitStore();
const state = reactive<{
    config: any;
    color: string;
}>({
    config: {},
    color: '',
});
state.config = initStore.config;
state.color = state.config?.defaultTheme['theme-color'];

const colorPicker = (newColor: string) => {
    theme.setThemeColor(newColor);
};
</script>

<style lang="scss">
.personal-center-view {
    // @include whrem(122, 38);
    width: pxToRem(122);
    color: var(--theme-background-color);
    @include flexCenter(center, center, true);
    position: relative;
    @include cursor;
    margin-top: pxToRem(42);

    &:hover {
        .select__box {
            opacity: 1;
        }
    }
    .label {
        @include whrem(100%, 38);
        @include flexCenter;
        background: var(--theme-color);

        @include after {
            @include position(absolute, top pxToRem(18) right pxToRem(10));
            @include whrem(0);
            border-left: pxToRem(4) solid transparent;
            border-right: pxToRem(4) solid transparent;
            border-top: pxToRem(6) solid;
        }

        &:hover {
            &::after {
                @include position(absolute, top pxToRem(10) right pxToRem(10));
                border-top: pxToRem(6) solid transparent;
                border-bottom: pxToRem(6) solid;
            }
            // & ~ .select__box {
            //     opacity: 1;
            // }
        }
    }

    .select__box {
        opacity: 0;
        // @include pointerEvents(none);
        background: var(--theme-background-color);
        width: 100%;
        border: pxToRem(1) solid #ccc;
        color: var(--font-base-color);
        margin-top: pxToRem(2);

        li {
            @include flexCenter;
            height: pxToRem(38);
            border-bottom: pxToRem(1) solid #ccc;
            &:hover {
                background: var(--theme-color);
            }
            &:last-child {
                border-bottom: none;
            }
        }

        .color-block {
            @include flexCenter(space-around);
        }
    }
}
</style>
