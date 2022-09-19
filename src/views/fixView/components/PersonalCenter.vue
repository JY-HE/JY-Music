<template>
    <div class="personal-center-view" @mouseenter="onMouseEnter">
        <div class="view-box" @mouseleave="onMouseLeave">
            <div class="label">个人中心</div>
            <div class="select__box" v-show="state.showSelectBox">
                <ui>
                    <li class="color-block">
                        <span>主题色</span>
                        <el-color-picker
                            v-model="state.color"
                            @change="colorPicker"
                            popper-class="color__picker"
                        />
                    </li>
                </ui>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import theme from '@/utils/theme';
import { InitStore } from '@/store/initStore';

const viewBoxRef = ref<null | HTMLElement>(null);
const initStore = InitStore();
const state = reactive<{
    config: any;
    color: string;
    showSelectBox: Boolean;
}>({
    config: {},
    color: '',
    showSelectBox: true,
});

state.config = initStore.config;
state.color = state.config?.defaultTheme['theme-color'];

const colorPicker = (newColor: string) => {
    theme.setThemeColor(newColor);
    state.showSelectBox = false;
};

const onMouseEnter = () => {
    state.showSelectBox = true;
};

const onMouseLeave = (event: MouseEvent) => {
    state.showSelectBox = event.toElement.className.includes('color__picker');
};
</script>

<style lang="scss">
.personal-center-view {
    @include whrem(122, 38);
    color: var(--theme-background-color);
    @include cursor;
    z-index: 100;

    .view-box {
        width: 100%;
        position: relative;

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
        }

        .label {
            @include whrem(100%, 38);
            @include flexCenter;
            background: var(--theme-color);
        }

        .select__box {
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
}
</style>
